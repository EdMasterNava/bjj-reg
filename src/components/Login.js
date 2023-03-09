import React, { useRef, useState } from 'react';
import { useAuth } from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './css/Login.css';

function Login(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        try{
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/bjj-reg');
        } catch {
            return setError('Failed To Log In');
        }
        
    }
    return (
        <div className='register-container'>
            <form onSubmit={handleSubmit}>
                <div className='form-title'>Log In</div>
                {error ? <div className='error'>{error}</div> : <div></div>}
                <div>
                    <label>Email</label>
                    <input  required 
                            type='email' 
                            placeholder='your-email@example.com' 
                            id='email' 
                            name='email'
                            ref={emailRef}/>
                </div>
                <div>
                    <label>Password</label>
                    <input  required 
                            type='password' 
                            placeholder='********' 
                            id='password' 
                            name='password'
                            ref={passwordRef}/>
                </div>
                <button type='submit' disabled={loading}>Log In</button>
            </form>
            <div className='form-footer'>
                Don't have an account? <Link to="/bjj-reg/register">Register</Link>
            </div>
        </div>
    )
}

export default Login;