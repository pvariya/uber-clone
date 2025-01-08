import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
         <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-4'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
            <h4 className='text-lg font-medium'>monika sharma</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>₹200.5</h4>
            <p className='text-sm bg-gray-50 text-center'>Earned</p>
          </div>
        </div>

        <div className='flex bg-gray-200 rounded-xl items-start justify-center gap-5 p-3 mt-5'>
          <div className='text-center'>
            <i className="text-3xl mb-4 font-thin ri-timer-2-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600 '>Hors Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-4 font-thin ri-speed-up-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600 '>Hors Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-4 font-thin ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600 '>Hors Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails