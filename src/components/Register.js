import React, { useRef, useState } from 'react';
import { useAuth } from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './css/Register.css';

function Register(){
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { register } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password Do Not Match');
        }
        try{
            setError('');
            setLoading(true);
            await register(emailRef.current.value, passwordRef.current.value);
            navigate('/bjj-reg'); 
        } catch {
            return setError('Failed To Create An Account');
        } 
    }
    return (
        <div className='register-container'>
                <form onSubmit={handleSubmit}>
                    <div className='form-title'>Register</div>
                    {error ? <div className='error'>{error}</div> : <div></div>}
                    <div>
                        <label>Name</label>
                        <input  type='text' 
                                placeholder='John Doe' 
                                id='name' 
                                name='name'
                                ref={nameRef}/> 
                    </div>
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
                    <div>
                        <label>Confirm Password</label>
                        <input  required 
                                type='password' 
                                placeholder='********' 
                                id='password-confirmation' 
                                name='password-confirmation'
                                ref={passwordConfirmRef}/>
                    </div>
                    <button type='submit' disabled={loading}>Register</button>
                </form>
                <div className='form-footer'>
                    Already have an account? <Link to="/bjj-reg/login">Log In</Link>
                </div>
        </div>
    )
}

export default Register;