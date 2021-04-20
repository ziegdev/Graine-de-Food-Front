import React from 'react';
import Signin from 'src/pages/LoginPage/Signin';
import Signup from 'src/pages/LoginPage/Signup';
import './style.scss';


const LoginPage = () => {

    //const [user, setUser] = useState({name:"", email:"", password:""});
    const [error, setError]= useState("");

    const Login = details => {
      console.log(details);
  }
    
    return (
        <div className="loginpage">
            <Signin Login={Login} error={error}/>
            <Signup />
        </div>
    );
};

export default LoginPage;
