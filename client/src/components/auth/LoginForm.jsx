import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { axiosInstance } from '../../lib/axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const queryClient = useQueryClient();

    const { mutate: loginMutation, isLoading } = useMutation({
        mutationFn: (userData) => axiosInstance.post("/auth/login", userData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["authUser"] });
            alert("Logged in successfully");
        },
        onError: (error) => alert(error.message),
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        loginMutation({ username, password });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type='text'
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <input 
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type='submit' disabled={isLoading}>Log in</button>
        </form>
    );
};

export default LoginForm;
