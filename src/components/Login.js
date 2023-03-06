import React from 'react';
import './css/Login.css';

function Login(){
    return (
        <div className='register-container'>
            <form>
                <div>
                    <label>Email</label>
                    <input type='email' placeholder='your-email@example.com' id='email' name='email'/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' placeholder='********' id='password' name='password'/>
                </div>
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login;