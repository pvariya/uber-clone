import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidPopUp from '../components/ConfirmRidPopUp'
const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUppanel] = useState(true)
  const ridepopUpPanelRef = useRef(null)

  const [confirmRidePopUpPanel, setConfirmRidePopUppanel] = useState(false)
  const confirmRidepopUpPanelRef = useRef(null)

  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridepopUpPanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(ridepopUpPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [ridePopUpPanel])

  useGSAP(() => {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidepopUpPanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(confirmRidepopUpPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePopUpPanel])
  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/captain-home' className='  h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <button><i className="text-lg font-medium ri-logout-box-r-line"></i></button>
        </Link>
      </div>

      <div className='h-3/5 '>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>

      <div ref={ridepopUpPanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12 translate-y-full'>
        <RidePopUp setRidePopUppanel={setRidePopUppanel} setConfirmRidePopUppanel={setConfirmRidePopUppanel} />
      </div>


      <div ref={confirmRidepopUpPanelRef} className='fixed w-full h-screen z-10 bottom-0 bg-white px-3 py-10 pt-12 translate-y-full'>
        <ConfirmRidPopUp setRidePopUppanel={setRidePopUppanel} setConfirmRidePopUppanel={setConfirmRidePopUppanel} />
      </div>
    </div>
  )
}

export default CaptainHome