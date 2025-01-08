import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setRidePopUppanel(false)
            }} className='p-2 text-center absolute top-0  w-[93%]' >
                <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>

            <div className='flex items-center justify-between mt-4 p-3 bg-yellow-500 rounded-lg'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                    <h2 className='text-lg font-medium'>janvi patel</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 km</h5>
            </div>
            <div className='flex gap-2 justify-between items-center flex-col'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-3 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div className=' '>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600 -mt-1'>kankariya talab ahemdabad</p>
                        </div>
                    </div>
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

                <div className='w-full'>
                    <button
                        onClick={() => {
                            props.setRidePopUppanel(false);
                        }} className='mt-5 w-full bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg'>
                        Ignore</button>
                    <button
                        onClick={() => {
                            props.setConfirmRidePopUppanel(true);
                        }} className='mt-3 w-full bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>
                        Accept</button>
                </div>


            </div>
        </div>
    )
}

export default RidePopUp