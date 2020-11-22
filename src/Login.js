import React, {useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import {auth} from "./firebase";

const Login = () => {
    const history = useHistory();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const login = (event) => {
        event.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch(e =>alert(e.message))
     }

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push("/");
        })
        .catch((e)=> alert(e.message))
    }


    return (
        <div className="login">
            <Link to="/">
                <img 
                className="login_logo"
                src="https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent-300x90.png"
                alt/>
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                    value={email} 
                    onChange={event => setemail(event.target.value)}
                    type="email"/>

                    <h5>Password</h5>
                    <input value={password} onChange={event => setpassword
                    (event.target.value)}
                    type="password"/>

                    <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
                </form>

                <p>
                    By signing in you agree to Amazon's conditions of  Sue & Sale. Please see our  Privacy Notice, our cookies, our cookies notice our interest-based Ads Notice.
                </p>
                <button 
                onClick={register} 
                className="login_registerButton">
                    Create your Amazon account
                </button>
            </div>
        </div>
    )
}

export default Login
