import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { axiosInstance } from '../../lib/axios';

const SignUpForm = () => {
    const [username, setUsername] =useState('');
    const [password, setPassword] = useState('');

    const queryClient = useQueryClient();

    const { mutate: signUpMutation, isLoading } = useMutation({
        mutationFn: async (data) => {
            const res = await axiosInstance.post("/auth/signup", data);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['authUser'] });
            alert("User signed up successfully!");
        },
        onError: (err) => {
            alert("Error signing up: " + err.message);
            queryClient.resetQueries({ queryKey: ['authUser'] });
        },
    });

    const handleSignup = (e) => {
        e.preventDefault();
        signUpMutation({ username, password });
    };


    return (
        <form onSubmit={handleSignup}>
            <input 
                type='text'
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input 
                type='password'
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type='submit' disabled={isLoading}>
                Join
            </button>
        </form>
    );
};

export default SignUpForm;
