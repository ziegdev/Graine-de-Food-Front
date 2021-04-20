import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import api from 'src/api';

const Signin = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userLogged, setUserLogged] = useState(false)
    const [user, setUser] = useState([])
    
    async function tryLogin () {
        return (
            await api.post('/login', {email, password}).then((result) => result.data)
        ) 
    }
    
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const userapi = await tryLogin() 
          console.log('userapi:', userapi)
          console.log('UserLogged:', userLogged)
          if(userapi) <Redirect to='/mon-compte' userapi={userapi} />
    }


    function validateForm() {
    return email.length > 0 && password.length > 0;
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
                    disabled={!validateForm()}
                >
                <div className="loginpage__signin__input">
                    <Input
                        name="signin_email"
                        className="loginpage__signin__input__content"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}                
                    />
                    <Input
                        name="signin_password"
                        className="loginpage__signin__input__content"
                        placeholder='Mot de passe' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                    <button
                        type="submit"
                        className="loginpage__signin__button"
                        disabled={!validateForm()}
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
