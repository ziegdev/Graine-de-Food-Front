import React, { useState, useEffect, Component } from 'react';
//import {Redirect} from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import api from 'src/api';

export default class Signin extends Component {
    
    //const [details, setDetails] = useState({ email: "", password: ""});
    //const [password, setPassword] = useState("");
    //const [userLogged, setUserLogged] = useState(false)
    //const [user, setUser] = useState([])
    
    /*useEffect(() => {
        //const userData = { email, password };
    }, 
    [])*/
    
    handleOnSubmit =  (e) => {
        e.preventDefault();
        const data = {
          email: this.email,
          password: this.password
        }
        api.post('http://localhost:3000/login', data)
        .then(response => { console.log(response.data)})
        .catch(err => {console.log(err)})
        //Login(details);

        /*const userapi = await tryLogin() 
          console.log('userapi:', userapi)
          console.log('UserLogged:', userLogged)
          if(userapi) <Redirect to='/mon-compte' userapi={userapi} />*/
    }


    /*function validateForm() {
    return email.length > 0 && password.length > 0;
    }*/


    render() {
      return (
        <div className="loginpage">
            <div className="loginpage__signin">
                <h2 className="loginpage__signin__title">Se connecter</h2>
                <form 
                    action="submit"
                    method="get"
                    className="loginpage__signin--form"
                    onSubmit={this.handleOnSubmit}
                    //disabled={!validateForm()}
                >
                
                <div className="loginpage__signin__input">
                    <Input
                        name="signin_email"
                        className="loginpage__signin__input__content"
                        placeholder='Email'
                        onChange={e => this.email = e.target.value}               
                    />
                    <Input
                        name="signin_password"
                        className="loginpage__signin__input__content"
                        placeholder='Mot de passe' 
                        onChange={e => this.password = e.target.value}
                    />
                </div>
                    <button
                        type="submit"
                        className="loginpage__signin__button"
                        //disabled={!validateForm()}
                    >
                        Se connecter
                    </button>
                    <span>Mot de passe oublié ?</span>
                </form>
            </div>
        </div>
      )
    }    
};


