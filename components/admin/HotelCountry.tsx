"use client";
import useLocation from "@/hooks/useLocation";
import { HotelWithRooms } from "../hotel/AddHotelForm";

const HotelCountry = ({ hotel }: { hotel: HotelWithRooms }) => {
  const { getCountryByCode } = useLocation();
  const country = getCountryByCode(hotel.country.substring(0, 16));

  return country?.name;
};

export default HotelCountry;
