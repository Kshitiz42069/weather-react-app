import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../services/WeatherService'


function Temperature({weather:{
    details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone
}}) {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{details}</p>
        </div>

        {/* Temperature and details */}

        <div className='flex gap-[2rem] items-center justify-evenly lg:justify-between text-white py-3'>
            <img src={iconUrlFromCode(icon)} alt="" className='w-20 lg:ml-[8rem] sm:ml-[2rem] sm:mr-6'/>
            <p className='text-5xl sm:mr-1'>{`${temp.toFixed()}°`}</p>
            <div className='flex flex-col space-y-2 sm:ml-5'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className='mr-1'/>
                    Feels Like:
                    <span className='font-medium ml-1 lg:mr-[6rem]'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className='mr-1'/>
                    Humidity:
                    <span className='font-medium ml-1 lg:mr-[6rem]'>{`${humidity.toFixed()}%`}</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className='mr-1'/>
                    Wind:
                    <span className='font-medium ml-1 lg:mr-[6rem]'>{`${speed.toFixed()}km/h`}</span>
                </div>
            </div>
        </div>

        {/* Sunset and sunrise time */}

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun/>
            <p className='font-light'>
                Rise: <span className='font-medium ml-1'>{formatToLocalTime(sunrise,timezone,"hh:mm a")}</span>
            </p>
            <p className='font-light'>|</p>
            <UilSunset/>
            <p className='font-light'>
                Set: <span className='font-medium ml-1'>{formatToLocalTime(sunset,timezone,"hh:mm a")}</span>
            </p>
            <p className='font-light'>|</p>
            <UilArrowUp/>
            <p className='font-light'>
                High: <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span>
            </p>
            <p className='font-light'>|</p>
            <UilArrowDown/>
            <p className='font-light'>
                Low: <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span>
            </p>
        </div>
    </div>
  )
}

export default Temperature