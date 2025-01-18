import React from 'react';
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from '../lib/axios';

const Navbar = () => {
    const { data: authUser } = useQuery({
        queryKey: ['authUser']
    });

    const queryClient = useQueryClient();

    const { mutate: logout } = useMutation({
        mutationFn: async () => axiosInstance.post("/auth/logout"),
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['authUser']});
        }
    });
    return (
        <div>
            {authUser ? (
                <>
                    <Link to={"/"}><button>Home</button></Link>
                    <button onClick={() => logout()}>Logout</button>
                </>
                
            ) : (
                <>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/signup"}>Signup</Link>
                </>
            )}
        </div>
    );
};

export default Navbar;
