import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Captainlogin = () => {
   const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [captainData, setcaptainData] = useState('')
  
    const submitForm = (e) => {
      e.preventDefault()
      setcaptainData({
        email: email,
        password: password
      })
      console.log(userData);
      setEmail('')
      setpassword('')
  
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
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
        <p className='text-center '>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>
           Register as a Captain</Link></p>
      </div>
      <div>
        <Link to='/login'
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-2 rounded px-4 py-2  w-full text-lg placeholder:text-bs '>
            Sign in as User</Link>
      </div>
    </div>
  )
}

export default Captainlogin