import prismadb from "@/lib/prismadb";

export const getNewHotels = async () => {
  try {
   

    const hotels = await prismadb.hotel.findMany({
      where: {
        iNew: true,
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
