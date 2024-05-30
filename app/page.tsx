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
  const featuredHotel = await getFeaturedHotels()
  const newHotels = await getNewHotels()
  const hotels = await getHotels(searchParams)

  return (
    <div>
     <FeaturedHotel featuredHotel={featuredHotel}/>
      <NewHotels newHotels={newHotels} />
      <h2 className="font-semibold underline text-xl text-center">
        Our Hotels
      </h2>
      <AllHotels hotels={hotels} />
    </div>
  )
}
