import React from 'react'

const LocationSearchPanel = (props) => {





    // sampal array for location 
    const locations = [
        "24B, Near Kapoor's  cafe Sheryians Coding School, Bhopal",
        "24B, Near variya's  cafe Sheryians Coding School, Bhopal",
        "24B, Near joshi's  cafe Sheryians Coding School, Bhopal",
        "24B, Near narola's  cafe Sheryians Coding School, Bhopal"
    ]

    return (
        <div>
            {
                locations.map((ele, idx) => {
                    return <div key={idx} onClick={() => {
                        props.setVehicalPanal(true)
                        props.setpanalOpen(false)
                    }} className='flex items-center justify-start gap-4 my-2 border-gray-200 active:border-black border-2 p-3 rounded-xl'>
                        <h2 className='bg-[#eee] rounded-full  h-9 flex items-center justify-center  w-14'>
                            <i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{ele} </h4>
                    </div>
                })
            }

            {/* this is just a sample data  */}




        </div>
    )
}

export default LocationSearchPanel