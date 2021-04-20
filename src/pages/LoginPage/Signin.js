import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import api from 'src/api';

const Signin = ({ Login, error }) => {
    
    const [details, setDetails] = useState({ email: "", password: ""});
    //const [password, setPassword] = useState("");
    //const [userLogged, setUserLogged] = useState(false)
    //const [user, setUser] = useState([])
    
    useEffect(() => {
        const userData = {email, password};
        api.post('/login', {userData})
        .then((response) => setDetails(response.data.userData))
    }, 
    []);
    
    const handleOnSubmit =  (e) => {
        e.preventDefault();
        Login(details);

        /*const userapi = await tryLogin() 
          console.log('userapi:', userapi)
          console.log('UserLogged:', userLogged)
          if(userapi) <Redirect to='/mon-compte' userapi={userapi} />*/
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
                {(error!="") ? ( <div className="errorMessage">{error}</div> ) : ""}
                <div className="loginpage__signin__input">
                    <Input
                        name="signin_email"
                        className="loginpage__signin__input__content"
                        placeholder='Email'
                        value={details.email}
                        onChange={(e) => setDetails({...details, email: e.target.value})}                
                    />
                    <Input
                        name="signin_password"
                        className="loginpage__signin__input__content"
                        placeholder='Mot de passe' 
                        value={details.password}
                        onChange={(e) => setDetails({...details, password: e.target.value})}
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
