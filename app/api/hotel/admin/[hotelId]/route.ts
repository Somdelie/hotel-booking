import prismadb from "@/lib/prismadb";
import { isAdmin } from "@/lib/utils";
import { auth, currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { hotelId: string } }
) {
  try {
    const body = await req.json();
    const user = await currentUser();

    if (!params.hotelId) {
      return new NextResponse("Hotel Id is required", { status: 400 });
    }

    if(!user || !isAdmin(user)){
      throw new Error('Unknown Action')
  }

    const hotel = await prismadb.hotel.update({
      where: {
        id: params.hotelId,
      },
      data: { ...body },
    });

    return NextResponse.json(hotel);
  } catch (error) {
    console.log("Error at /api/hotel/hotelId PATCH", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { hotelId: string } }
) {
  try {
    const user = await currentUser();

    if (!params.hotelId) {
      return new NextResponse("Hotel Id is required", { status: 400 });
    }

    if(!user || !isAdmin(user)){
      throw new Error('Unknown Action')
  }

    const hotel = await prismadb.hotel.delete({
      where: {
        id: params.hotelId,
      },
    });
    revalidatePath("/admin")
    return NextResponse.json(hotel);
  } catch (error) {
    console.log("Error at /api/hotel/hotelId DELETE", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
