import { getFeaturedHotels } from "@/actions/getFeaturedHotels";
import { getHotels } from "@/actions/getHotels";
import { getNewHotels } from "@/actions/getNewHotels";
import AllHotels from "@/components/hotel/AllHotels";
import FeaturedHotel from "@/components/hotel/FeaturedHotel";
import HotelList from "@/components/hotel/HotelList";
import NewHotels from "@/components/hotel/NewHotels";

interface HomeProps {
  searchParams: {
    title: string,
    country: string,
    state: string,
    city: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const hotels = await getHotels(searchParams)

  return (
    <div>
      <AllHotels hotels={hotels} />
    </div>
  )
}
