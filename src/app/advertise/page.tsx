import AdvertiseBenefitChunk from "@/chunks/advertise-template-chunk/advertise-benefit--template-chunk/AdvertiseBenefitChunk";
import AdvertiseHeroChunk from "@/chunks/advertise-template-chunk/advertise-hero-section-chunk/AdvertiseHeroChunk";
import AdvertisePriceChunk from "@/chunks/advertise-template-chunk/advertise-price-template-chunk/AdvertisePriceChunk";
import Navbar from "@/components/navbar/Navbar";

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
      <AdvertiseHeroChunk />
      <AdvertiseBenefitChunk />
      <AdvertisePriceChunk />
    </div>
  );
};

export default page;
