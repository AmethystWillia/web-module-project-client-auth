// Import dependencies
import React from 'react';
import axios from 'axios';

const Login = () => {
    return (
        <div className='login-form'>
            <h2>Login</h2>
            <form>
                <input
                    type='text'
                    name='username'
                />
                <input
                    type='text'
                    name='password'
                />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Login;