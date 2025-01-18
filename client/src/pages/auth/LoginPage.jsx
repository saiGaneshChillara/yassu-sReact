import React from 'react';
import LoginForm from '../../components/auth/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <div>
                <h2>Login to your account</h2>
            </div>
            <div>
                <LoginForm />
            </div>
            <div>
                <Link to={"/signup"}>Join now</Link>
            </div>
        </div>
    );
};

export default LoginPage;
