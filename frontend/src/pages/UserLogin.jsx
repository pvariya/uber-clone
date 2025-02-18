import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { UserdataContext } from '../context/UserContext'
import axios from 'axios'


const Userlogin = () => {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const { user, setUser } = React.useContext(UserdataContext)
  const navigate = useNavigate(user, setUser)

  const submitForm = async (e) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }

    const res = await axios.post(`https://uber-clone-1-9e48.onrender.com/user/login`, userData)
    if (res.status === 200) {
      const data = res.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
    setEmail('')
    setpassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e) => {
          submitForm(e)
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)

            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-bs '
            type="email"
            required
            placeholder='email@example.com' />

          <h3 className='text-lg font-medium mb-2'>Enter password</h3>

          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-bs '
            type="password"
            required
            placeholder='password' />

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-bs '>login</button>

        </form>
        <p className='text-center '>New here?<Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div>
        <Link to='/captain-login'
          className='bg-[#10b416] flex items-center justify-center text-white font-semibold mb-2 rounded px-4 py-2  w-full text-lg placeholder:text-bs '>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default Userlogin
