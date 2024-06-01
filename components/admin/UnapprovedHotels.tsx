'use client'
import { useState } from "react";
import { HotelWithRooms } from "../hotel/AddHotelForm";
import { Button } from "../ui/button";
import AdminHotelCard from "./AdminHotelCard";

const UnapprovedHotels = ({ unapprovedHotels }: { unapprovedHotels: HotelWithRooms[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 10;
  const totalPages = Math.ceil(unapprovedHotels.length / hotelsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * hotelsPerPage;
  const selectedHotels = unapprovedHotels.slice(startIndex, startIndex + hotelsPerPage);
  
 
  return (
    <div className="w-full">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-4">
            
           {selectedHotels.map((hotel) => (
        <AdminHotelCard hotel={hotel} key={hotel.id}/>
    ))}
        </div>
      {/* pagination goes here */}
      {unapprovedHotels.length > 10 && (
        <div className="flex w-full mt-6 items-center justify-center gap-6">
          <Button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </Button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}

export default UnapprovedHotels