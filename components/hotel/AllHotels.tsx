'use client'
import { HotelWithRooms } from "./AddHotelForm";
import HotelCard from "./HotelCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowBigRight, Dumbbell, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import AmenityItem from "../AmenityItem";
import { FaSwimmer } from "react-icons/fa";

const AllHotels = ({ hotels }: { hotels: HotelWithRooms[] }) => {
    
    const router = useRouter();

  return (
    <div
      className="py-8 flex flex-col justify-center"
    
    >
     
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="p-2 bg-white shadow dark:bg-gray-900"   onClick={() => router.push(`/hotel-details/${hotel.id}`)}>
            <div className="relative h-40 overflow-hidden rounded bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <Image src={hotel.image} alt="img" fill />
            </div>
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {hotel.title}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {hotel.description.substring(0, 45)}...
            </p>
            <div className="text-primary/90">
                    <AmenityItem>
                        <MapPin className="w-4 h-4" /> {hotel.city}
                    </AmenityItem>
                    {hotel.swimmingPool && <AmenityItem>
                        <FaSwimmer size={18} /> Pool
                    </AmenityItem>}
                    {hotel.gym && <AmenityItem><Dumbbell className="w-4 h-4" />Gym</AmenityItem>}
                </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end">
        <Link href="/" className="flex items-center gap-2 float-right">
          View more <ArrowBigRight />
        </Link>
      </div>
    </div>
  );
};

export default AllHotels;
