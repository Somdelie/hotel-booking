'use client'
import { HotelWithRooms } from "./AddHotelForm";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NewHotelCard = ({ hotel }: { hotel: HotelWithRooms }) => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col rounded dark:text-muted-foreground bg-white dark:bg-gray-900 bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <Image src={hotel.image} alt="img" fill />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {hotel.title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {hotel.description.substring(0, 45)}...
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          data-ripple-light="true"
          type="button"
          onClick={() => router.push(`/hotel-details/${hotel.id}`)}
          className="select-none rounded-lg bg-gray-900 dark:bg-gray-300 dark:text-gray-950 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          View Hotel
        </button>
        <div className="relative w-full card2_box bg-black">
          <span className="absolute bottom-0 right-0 card-span h-4 w-[50%]"></span>
        </div>
      </div>
    </div>
  );
};

export default NewHotelCard;
