import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelPanelRef = useRef(null)
    
    useGSAP(() => {
        if (finishRidePanel) {
            gsap.to(finishRidePanelPanelRef.current, {
                transform: 'translateY(0)',
            })
        } else {
            gsap.to(finishRidePanelPanelRef.current, {
                transform: 'translateY(100%)',
            })
        }
    }, [finishRidePanel])
    return (
        <div className='h-screen '>

            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/captain-home' className='  h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <button><i className="text-lg font-medium ri-logout-box-r-line"></i></button>
                </Link>
            </div>

            <div className='h-4/5 '>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative'
                onClick={
                    () => setFinishRidePanel(true)
                }>
                <h5 className='p-2 text-center absolute top-0 w-[90%]'>
                    <i className="ri-arrow-up-wide-line text-3xl text-gray-400"></i></h5>
                <h4 className='text-xl font-semibold'>4 kM away</h4>
                <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>

            <div ref={finishRidePanelPanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12 translate-y-full'>
                <FinishRide setFinishRidePanel={setFinishRidePanel} />
            </div>

        </div>
    )
}

export default CaptainRiding