import React from 'react';
import SignUpForm from '../../components/auth/SignUpForm';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    return (
        <div>
            <div>
                <h2>Join and start Learning with me</h2>
            </div>
            <div>
                <SignUpForm />
            </div>
            <div>
                <Link to={"/login"}>Login</Link>
            </div>
        </div>
    );
};

export default SignUpPage;
