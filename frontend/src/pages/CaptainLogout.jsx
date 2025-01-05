import React from 'react'
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        localStorage.removeItem('token');
        navigate('/captain-login');
    }, [navigate]);
    return (
        <div>CaptainLogout</div>
    )
}

export default CaptainLogout