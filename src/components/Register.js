import React from 'react';
import './css/Register.css';

function Register(){
    return (
        <div className='register-container'>
                <form>
                    <div>
                        <label>Name</label>
                        <input type='text' placeholder='John Doe' id='name' name='name'/> 
                    </div>
                    <div>
                        <label>Email</label>
                        <input required type='email' placeholder='your-email@example.com' id='email' name='email'/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input required type='password' placeholder='********' id='password' name='password'/>
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input required type='password' placeholder='********' id='password-confirmation' name='password-confirmation'/>
                    </div>
                    <button type='submit' >Register</button>
                </form>
                <div className='form-footer'>
                    Already have an account? Sign In
                </div>
        </div>
    )
}

export default Register;