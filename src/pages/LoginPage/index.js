import React, { useState } from 'react';
import Signin from 'src/pages/LoginPage/Signin';
import Signup from 'src/pages/LoginPage/Signup';
import './style.scss';


const LoginPage = () => {

  const [user, setUser] = useState({first_name:"", email:"", password:""});
  const [error, setError]= useState("");
    /*const currentUser = {
      api.post('/login', {email, password}).then((result) => result.data)
  }*/

  function Login(details) {
    console.log(details);
    if (details.email == user.email && details.password == user.password) {
      console.log('Utilisateur connecté');
      setUser({ first_name: details.first_name, email: details.email, password: details.password });
    }
    else {
      console.log('Utilisateur non reconnu');
      //setError('Email et/ou mot de passe invalide');
    }
  }

  const Logout = () => {
    setUser({ first_name: "", email: "", password: ""})
  }
    
    return (
        <div className="loginpage">
          {user.email!= ""} ? (
            <div className="welcomeMessage">
            <h2>Welcome, <span>{user.first_name}</span></h2>
            <button onClick={Logout}>Se déconnecter</button>
            </div>
          ) : (
            <Signin />
            )
        </div>
    );
}

export default LoginPage;
