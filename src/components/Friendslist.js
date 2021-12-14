import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Friendslist = () => {
    const token = localStorage.getItem('token');
    const [friends, setFriends] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:9000/api/friends', {
        headers: {
            authorization: token
        }
    })
        .then(resp => {
            setFriends(resp.data);
        })
        .catch(err => {
            console.error(err);
        })
    }, []);
    
    return (
        <div>
            <h2>Friends List</h2>
            <div>
                {friends.map(friend => {
                    return (<p>- {friend.name} - {friend.email}</p>)
                })}
            </div>
        </div>
    );
};

export default Friendslist;