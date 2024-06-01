/* eslint-disable react/no-unescaped-entities */
import { getApprovedHotels } from "@/actions/getApprovedHotels"
import { getHotels } from "@/actions/getHotels"
import { getUnApprovedHotels } from "@/actions/getUnApprovedHotels"
import ApprovedHotels from "@/components/admin/ApprovedHotels"
import Bookings from "@/components/admin/Bookings"
import Hotels from "@/components/admin/Hotels"
import UnapprovedHotels from "@/components/admin/UnapprovedHotels"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


interface HomeProps {
  searchParams: {
    title: string,
    country: string,
    state: string,
    city: string
  }
}


export default async function Dashboard({ searchParams }: HomeProps) {
  const hotels = await getHotels(searchParams)
  const unapprovedHotels = await getUnApprovedHotels(searchParams)
  const approvedHotels = await getApprovedHotels(searchParams)

  return (
    <section className="w-full overflow-hidden flex flex-col items-center ">
    <div className="">
    <Tabs defaultValue="all" className="">
      <TabsList className=" mb-4 ">
        <TabsTrigger value="all">All Hotels</TabsTrigger>
        <TabsTrigger value="Unapproved">Unapproved</TabsTrigger>
        <TabsTrigger value="Approved">Approved</TabsTrigger>
        <TabsTrigger value="bookings">Bookings</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="relative">
    
      <Hotels hotels={hotels}/>
      </TabsContent>
      <TabsContent value="Unapproved">
      <UnapprovedHotels unapprovedHotels={unapprovedHotels}/>
      </TabsContent>
      <TabsContent value="Approved">
   <ApprovedHotels approvedHotels={approvedHotels}/>
      </TabsContent>
      <TabsContent value="bookings">
    <Bookings/>
      </TabsContent>
    </Tabs>
       </div>
    
    </section>
   
  )
}
