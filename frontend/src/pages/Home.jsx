import React, { useRef, useState } from 'react'
import { use } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehicalPanal from '../components/VehicalPanal'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'

const Home = () => {
  const [picup, setpickup] = useState('')
  const [destination, setdestination] = useState('')
  const [panalOpen, setpanalOpen] = useState(false)
  const panalRef = useRef(null)
  const panalClose = useRef(null)
  const [vehicalPanal, setVehicalPanal] = useState(false)
  const vehicalPanalRef = useRef(null)
  const [confirmedRidePanal, setConfirmedRidePanal] = useState(false)
  const ConfirmedRidePanalRef = useRef(null)
  const [lookingForDriverPanal, setLookingForDriverPanal] = useState(false)
  const lookingForDriverPanalRef = useRef(null)


  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  useGSAP(() => {
    if (panalOpen) {
      gsap.to(panalRef.current, {
        height: '70%',
        padding: 24
      })
      gsap.to(panalClose.current, {
        opacity: 1
      })
    } else {
      gsap.to(panalRef.current, {
        height: '0%',
        padding: 0
      })
      gsap.to(panalClose.current, {
        opacity: 0
      })
    }
  }, [panalOpen])

  useGSAP(() => {
    if (vehicalPanal) {
      gsap.to(vehicalPanalRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(vehicalPanalRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehicalPanal])

  useGSAP(() => {
    if (confirmedRidePanal) {
      gsap.to(ConfirmedRidePanalRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(ConfirmedRidePanalRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmedRidePanal])

  useGSAP(() => {
    if (lookingForDriverPanal) {
      gsap.to(lookingForDriverPanalRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(lookingForDriverPanalRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [lookingForDriverPanal])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className="w-16 absolute left-5  top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className=' flex flex-col justify-end h-screen absolute top-0  w-full '>

        <div className='h-[30%] p-6 bg-white relative' >
          <h5 ref={panalClose} onClick={() => {
            setpanalOpen(false);
          }} className='absolute top-6 right-6 text-2xl opacity-0'>
            <i className="ri-arrow-down-wide-line"></i></h5>


          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="Line absolute h-16 w-1 top-[44%] left-10 bg-gray-600 rounded-full "></div>
            <input
              onClick={() => {
                setpanalOpen(true)
              }}
              value={picup}
              onChange={(e) => {
                setpickup(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
              type="text" placeholder='Add a pick-up location' />


            <input
              onClick={() => {
                setpanalOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setdestination(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3'
              type="text" placeholder='Enter your destination' />
          </form>
        </div>

        <div ref={panalRef} className='bg-white h-0 '>
          <LocationSearchPanel setVehicalPanal={setVehicalPanal} setpanalOpen={setpanalOpen} />
        </div>
      </div>

      <div ref={vehicalPanalRef} className='fixed  w-full z-10 pt-12 bottom-0 bg-white px-3 py-10 translate-y-full'>
        <VehicalPanal setVehicalPanal={setVehicalPanal} setConfirmedRidePanal={setConfirmedRidePanal}/>
      </div>

      <div ref={ConfirmedRidePanalRef} className='fixed  w-full z-10 pt-12 bottom-0 bg-white px-3 py-6 translate-y-full'>
         <ConfirmedRide setLookingForDriverPanal={setLookingForDriverPanal} setConfirmedRidePanal={setConfirmedRidePanal}/>
      </div>

      <div ref={lookingForDriverPanalRef} className='fixed  w-full z-10 pt-12 bottom-0 bg-white px-3 py-6 translate-y-full'>
              <LookingForDriver setLookingForDriverPanal={setLookingForDriverPanal}/>
      </div>
      
    </div>
  )
}

export default Home