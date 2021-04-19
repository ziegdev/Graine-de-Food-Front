import React from 'react';
import { Input } from 'semantic-ui-react'

const Signin = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('je soumets le formulaire');
    }
    return (
        <div className="loginpage">
            <div className="loginpage__signin">
                <h2 className="loginpage__signin__title">Se connecter</h2>
                <form 
                    action="submit"
                    method="get"
                    className="loginpage__signin--form"
                    onSubmit={handleOnSubmit}
                >
                <div className="loginpage__signin__input">
                    <Input
                        name="signin_email"
                        className="loginpage__signin__input__content"
                        placeholder='Email'
                    />
                    <Input
                        name="signin_password"
                        className="loginpage__signin__input__content"
                        placeholder='Mot de passe' 
                    />
                </div>
                    <button
                        type="submit"
                        className="loginpage__signin__button"
                    >
                        Se connecter
                    </button>
                    <span>Mot de passe oublié ?</span>
                </form>
            </div>
        </div>
    )    
};

export default Signin;