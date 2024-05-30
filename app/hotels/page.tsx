import { getHotels } from "@/actions/getHotels";
import LocationFilter from "@/components/LocationFilter";
import AllHotels from "@/components/hotel/AllHotels";
import HotelList from "@/components/hotel/HotelList";

interface HomeProps {
  searchParams: {
    title: string,
    country: string,
    state: string,
    city: string
  }
}

export default async function Hotels({ searchParams }: HomeProps) {
  const hotels = await getHotels(searchParams)

  if (!hotels) return <div className="min-h-[75vh] flex items-center justify-center ">No hotels found....</div>
  return (
    <div>
      {hotels.length < 1 && <div className="min-h-[65vh] flex items-center justify-center ">No hotels found....</div>}
     <AllHotels hotels={hotels}/>
    </div>
  )
}
