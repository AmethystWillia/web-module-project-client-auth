// Import dependencies
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    
    const [state, setState] = useState({
        credentials: {
            username: '',
            password: '',
        }});

    const handleChange = e => {
        setState({
            credentials: {
                ...state.credentials,
                [e.target.name]: e.target.value,
            }
        });
    };

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', state.credentials)
            .then(resp => {
                const { token, role, username } = resp.data;
                localStorage.setItem('token', token);
                localStorage.setItem('role', role);
                localStorage.setItem('username', username);
                history.push('/friendslist');
            })
            .catch(err => {
                console.error(err);
            })
    };

    return (
        <div className='login-form'>
            <h2>Login</h2>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='username'
                    value={state.credentials.username}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='password'
                    value={state.credentials.password}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Login;