import React from 'react'
import { iconUrlFromCode } from '../services/WeatherService'

function Forecast({title, items}) {

    console.log(items)
  return (
    <div className='py-[1rem]'>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>
                {title}
            </p>
        </div>
        <hr className='my-2'/>
        <div className='flex flex-row gap-[1rem] items-center lg:justify-between justify-evenly text-white  sm:mx-1'>

            {items.map(item => (
                <div className='flex flex-col items-center justify-center sm:mr-4'>
                    <p className='font-medium lg:text-sm sm:text-xs'>
                        {item.title}
                    </p>
                    <img src={iconUrlFromCode(item.icon)} alt="" className='w-12 my-1'/>
                    <p className='font-medium'>
                        {`${item.temp.toFixed()}°`}
                    </p>
                    <p className='lg:font-medium sm:text-xs lg:text-sm'>
                        {item.weather.main}
                    </p>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Forecast