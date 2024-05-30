'use client'
import { useRouter } from "next/navigation";
import { HotelWithRooms } from "./AddHotelForm";
import Image from "next/image";

function FeaturedHotelCard({ hotel }: { hotel: HotelWithRooms }) {

    const router = useRouter();


  return (
    <div className="hover:scale-95 transition-all rounded bg-white dark:bg-gray-900 shadow">
      <div className="card_box">
        <span className="z-10"></span>
        <div className="relative h-40 rounded overflow-hidden text-white  ">
          <Image src={hotel.image} alt="img" fill />
        </div>
        <div className="p-2">
          <h2 className="font-semibold">{hotel.title}</h2>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    {hotel.description.substring(0, 45)}...
    </p>
        <button data-ripple-light="true" type="button" onClick={() => router.push(`/hotel-details/${hotel.id}`)} className="select-none rounded-lg bg-gray-900 mt-2 dark:bg-gray-300 dark:text-gray-950 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      View Hotel
    </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedHotelCard;
