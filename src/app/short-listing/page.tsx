import React from "react";
import ShortListingSection from "@/partials/short-listing/ShortListingSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Intern Place | Login ",
  description: "The Intern Place",
};

function page() {
  return <ShortListingSection />;
}

export default page;
