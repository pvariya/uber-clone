import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const UserLogout = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        localStorage.removeItem('token');
        navigate('/login');
    }, [navigate]);

    return <div>UserLogout</div>;
};

export default UserLogout