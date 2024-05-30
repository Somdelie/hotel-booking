import React from 'react'
import { HotelWithRooms } from './AddHotelForm'
import FeaturedHotelCard from './FeaturedHotelCard'

const FeaturedHotel = ({ featuredHotel }: { featuredHotel: HotelWithRooms[] }) => {
  return (
    <div className='py-8 flex flex-col justify-center items-center'>
        <h2 className='font-semibold underline text-xl'>Top Rated Hotels</h2>
        <div className='mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {featuredHotel.map((hotel) => (
                <FeaturedHotelCard hotel={hotel} key={hotel.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedHotel