import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
    const { push } = useHistory();
    const token = localStorage.getItem('token');

    useEffect (() => {
        axios.post('http://localhost:9000/api/logout', {}, {
            headers: {
                authorization: token
            }
        })
            .then(resp => {
                localStorage.removeItem('token');
                push('/login');
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    return (
        <div>Logged Out</div>
    );
};

export default Logout;