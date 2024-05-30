import React from 'react'
import { HotelWithRooms } from './AddHotelForm'
import NewHotelCard from './NewHotelCard'

const NewHotels = ({ newHotels }: { newHotels: HotelWithRooms[] }) => {
  return (
    <div className='py-8 flex flex-col justify-center items-center'>
        <h2 className='font-semibold underline text-xl'>Recently Added Hotels</h2>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
            {newHotels.map((hotel) => (
                <NewHotelCard hotel={hotel} key={hotel.id}/>
            ))}
        </div>
    </div>
  )
}

export default NewHotels