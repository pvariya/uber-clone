import React from 'react'

const VehicalPanal = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setVehicalPanal(false)
            }} className='p-2 text-center absolute top-0  w-[93%]' >
                <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

            <div onClick={() => {
                props.setConfirmedRidePanal(true)
            }}
                className='flex w-full items-center justify-between p-3 mb-4 border-2 bg-gray-100 active:border-black rounded-xl'>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png" alt="" />
                <div className=' w-1/2 ml-2'>
                    <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹193.20</h2>
            </div>

            <div onClick={() => {
                props.setConfirmedRidePanal(true)
            }}
                className='flex w-full items-center justify-between p-3 mb-4 border-2 bg-gray-100 active:border-black rounded-xl'>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className=' w-1/2 -ml-3'>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹65.57</h2>
            </div>

            <div onClick={() => {
                props.setConfirmedRidePanal(true)
            }}
                className='flex w-full items-center justify-between p-3 mb-4 border-2 bg-gray-100 active:border-black rounded-xl'>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className=' w-1/2 -ml-2'>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹118.57</h2>
            </div>
        </div>
    )
}

export default VehicalPanal