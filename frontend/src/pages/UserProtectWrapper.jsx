import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()


    React.useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [token]) 
    return (
        <>
            {children}
        </>
    )


}

export default UserProtectWrapper