import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 onClick={() => {
        props.setWaitingForDriverPanal(false)
      }}
        className='p-2 text-center absolute top-0  w-[93%]' >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i></h5>

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
      </div>
      
    </div>
  )
}

export default WaitingForDriver