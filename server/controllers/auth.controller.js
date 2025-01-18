import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Please provide both username and password"
            });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({
                message: "Username already exists"
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                message: "Password must be at least 8 characters long"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            username,
            password: hashedPassword
        });

        await user.save();

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "3d" });

        res.cookie("jwt-auth-token", token, {
            httpOnly: true,
            maxAge: 2 * 24 * 60 * 60 * 1000,
            sameSite: "strict",
        });

        res.status(201).json({
            message: "User registered successfully",
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "3d" });

        res.cookie("jwt-auth-token", token, {
            httpOnly: true,
            maxAge: 2 * 24 * 60 * 60 * 1000,
            sameSite: "strict",
        });

        res.status(200).json({
            message: "User logged in successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
};

export const logout = async (req, res) => {
    res.clearCookie("jwt-auth-token", { path: "/"});
    res.status(200).json({
        message: "User logged out successfully",
    });
}

export const getCurrentUser = async (req, res) => {
    try {
        return res.status(200).json({user: req.user});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
}