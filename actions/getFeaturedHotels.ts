import prismadb from "@/lib/prismadb";

export const getFeaturedHotels = async () => {
  try {
   

    const hotels = await prismadb.hotel.findMany({
      where: {
        featured: true,
        approved: true
      },
      include: { rooms: true },
    });

    return hotels;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
