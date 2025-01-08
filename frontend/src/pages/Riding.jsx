import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-2  h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <button><i className="text-lg font-medium ri-home-5-line"></i></button>
            </Link>

            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between '>
                    <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Purv</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>GJ05 KP 4211</h4>
                        <p className='text-sm text-gray-600'>maybach 680</p>
                    </div>
                </div>
                <div className='flex gap-2 justify-between items-center flex-col'>
                    <div className='w-full mt-5'>


                        <div className='flex items-center gap-3 p-3 border-b-2'>
                            <i className="text-lg ri-map-pin-2-fill"></i>
                            <div className=' '>
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className='text-sm text-gray-600 -mt-1'>kankariya talab ahemdabad</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-3 p-3 '>
                            <i className="text-lg ri-currency-fill"></i>
                            <div className=' '>
                                <h3 className='text-lg font-medium'>₹162.20</h3>
                                <p className='text-sm text-gray-600 -mt-1'>cash cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className='mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg'
                >Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding   