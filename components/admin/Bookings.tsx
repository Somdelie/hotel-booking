import { getBookings } from '@/actions/getBookings'
import prismadb from '@/lib/prismadb'
import React from 'react'

const Bookings = async () => {
    const bookings = await prismadb.booking.findMany({
        include: {Hotel: true}
    })
  return (
    <div className="w-full">
         <div className="grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-4">
        {bookings.map((booking) => (
            <div key={booking.id}>
                {booking.Hotel?.title}
            </div>
        ))}
        </div>
</div>
  )
}

export default Bookings