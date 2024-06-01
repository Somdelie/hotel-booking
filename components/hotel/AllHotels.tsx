"use client";
import { useState } from "react";
import { HotelWithRooms } from "./AddHotelForm";
import Image from "next/image";
import { Dumbbell, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import AmenityItem from "../AmenityItem";
import { FaSwimmer } from "react-icons/fa";
import { Button } from "../ui/button";

const AllHotels = ({ hotels }: { hotels: HotelWithRooms[] }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 10;
  const totalPages = Math.ceil(hotels.length / hotelsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * hotelsPerPage;
  const selectedHotels = hotels.slice(startIndex, startIndex + hotelsPerPage);

  return (
    <div className="py-4 flex flex-col justify-center">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {selectedHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="p-2 bg-white shadow dark:bg-gray-900"
            onClick={() => router.push(`/hotel-details/${hotel.id}`)}
          >
            <div className="relative h-52 overflow-hidden rounded bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Image src={hotel.image} alt="img" fill />
            </div>
            <div className="h-24">
              <h5 className="mb-2 block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {hotel.title.substring(0, 35)}...
              </h5>
              <p className="block font-sans text-sm leading-relaxed text-inherit antialiased">
                {hotel.description.substring(0, 45)}...
              </p>
              <AmenityItem>
                <MapPin className="w-4 h-4" /> {hotel.city.substring(0, 20)}
              </AmenityItem>
            </div>
            <div className="text-primary/90 grid grid-cols-3">
              {hotel.swimmingPool && (
                <AmenityItem>
                  <FaSwimmer size={18} /> Pool
                </AmenityItem>
              )}
              {hotel.gym && (
                <AmenityItem>
                  <Dumbbell className="w-4 h-4" />
                  Gym
                </AmenityItem>
              )}
            </div>
            <button data-label="Register" className="rainbow-hover my-2">
              <span className="sp">View Hotel</span>
            </button>
          </div>
        ))}
      </div>
      {/* pagination goes here */}
      {hotels.length > 10 && <div className="flex w-full mt-6 items-center justify-center gap-6">
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>}
      
    </div>
  );
};

export default AllHotels;
