import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from '../firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();
        // firebase login
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        })
        .catch(error=>alert(error.message));
    }

    const register = (e) => {
        e.preventDefault();
        // firebase register
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        })
        .catch(error=>alert(error.message));
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'>
                </img>
            </Link>
            <div className='login__container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>

                    <button type='submit' onClick={signIn} className='login__signInButton'>
                        Sign In
                    </button>
                </form>

                <button className='login__registerButton' onClick={register}>Create your amazon account</button>
            </div>
        </div>
    );
}

export default Login;
