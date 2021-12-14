import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const AddFriend = () => {
    const token = localStorage.getItem('token');
    const history = useHistory();
    const [form, setForm] = useState({
        name: '',
        email: '',
    });

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    };

    const addFriend = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
            .then(resp  => {
                history.push('/friends')
            })
            .catch(err => {
                console.error(err);
            })
    };

    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={addFriend}>
                <label>Freind Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    onChange={handleChange}
                />
                <label>Freind Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default AddFriend;