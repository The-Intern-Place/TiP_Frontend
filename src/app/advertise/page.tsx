import Navbar from "@/components/navbar/Navbar";
import AdvertiseBenefit from "@/partials/advertise/AdvertiseBenefit";
import AdvertiseHero from "@/partials/advertise/AdvertiseHero";
import AdvertisePrice from "@/partials/advertise/AdvertisePrice";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "The Intern Place | Advertise",
  description: "The Intern Place",
};

const page = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar bgcolor="#FAFBFC" />
      <AdvertiseHero />
      <AdvertiseBenefit />
      <AdvertisePrice />
    </div>
  );
};

export default page;
