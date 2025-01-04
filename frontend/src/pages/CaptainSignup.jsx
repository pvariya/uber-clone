import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
const CaptainSignup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [FristName, setFirstName] = useState('')
  const [LastName, setLastname] = useState('')
  const [userdata, setUserData] = useState({})


  const [vehicalColor, setVehicalColor] = useState('')
  const [vehicalPlate, setVehicalPlate] = useState('')
  const [vehicalcapacity, setVehicalCapacity] = useState('')
  const [vehicaltype, setVehicalType] = useState('')

  const { captain, setCaptian } = React.useContext(CaptainDataContext)


  const submitForm = async (e) => {
    e.preventDefault()
    const captaindata = {
      fullName: {
        FristName: FristName,
        LastName: LastName,
      },
      email: email,
      password: password,
      vehical: {
        color: vehicalColor,
        plate: vehicalPlate,
        capacity: vehicalcapacity,
        type: vehicaltype,
      }
    }

    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captaindata)
    
    if (res.status === 201) {
      const data = res.data
      setCaptian(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }
    // console.log(userdata);
    setEmail('')
    setpassword('')
    setFirstName('')
    setLastname('')
    setVehicalColor('')
    setVehicalPlate('')
    setVehicalcapacity('')
    setVehicalType('')
  }
  return (
    <div className='p-5 h-screen flex flex-col justify-between items-center'>
      <div>
        <img className='w-16 mb-' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <form onSubmit={(e) => {
          submitForm(e)
        }}>

          <h3 className='text-lg w-full font-medium mb-2'>What's our Captain's name</h3>
          <div className='flex gap-4 mb-6'>
            <input
              value={FristName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base '
              type="text"
              required
              placeholder='Frist name' />
            <input
              value={LastName}
              onChange={(e) => {
                setLastname(e.target.value)
              }}
              className='bg-[#eeeeee]   w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base '
              type="text"
              required
              placeholder='last name' />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
            type="email"
            required
            placeholder='email@example.com' />

          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
            type="password"
            required
            placeholder='password' />
          <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3>
          <div className='flex gap-4 mb-6'>
            <input
              value={vehicalColor}
              onChange={(e) => setVehicalColor(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              required
              placeholder='Vehicle Color'
            />
            <input
              value={vehicalPlate}
              onChange={(e) => setVehicalPlate(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              required
              placeholder='Vehicle Plate Number'
            />
          </div>
          <div className='flex gap-4 mb-6'>
            <input
              value={vehicalcapacity}
              onChange={(e) => setVehicalCapacity(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              required
              placeholder='Seating Capacity'
            />
            <select
              value={vehicaltype}
              onChange={(e) => setVehicalType(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg'
              required
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">motorcycle</option>
            </select>
          </div>
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-bs '>
            Create Captain Account</button>

        </form>
        <p className='text-center '>Already have a Account? <Link to='/captain-login' className='text-blue-600'>login here</Link></p>
      </div>

    </div>
  )
}

export default CaptainSignup