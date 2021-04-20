import React from 'react';
import Signin from 'src/pages/LoginPage/Signin';
import Signup from 'src/pages/LoginPage/Signup';
import './style.scss';


const LoginPage = () => {
    
    return (
        <div className="loginpage">
            <Signin />
            <Signup />
        </div>
    );
};

export default LoginPage;
