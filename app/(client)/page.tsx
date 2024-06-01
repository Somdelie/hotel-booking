import { getHotels } from "@/actions/getHotels";
import AllHotels from "@/components/hotel/AllHotels";
import Link from "next/link";

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
      <Link href='/admin'>Dashboard</Link>
      <AllHotels hotels={hotels} />
    </div>
  )
}
