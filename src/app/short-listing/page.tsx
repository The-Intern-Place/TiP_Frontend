import React from "react";
import type { Metadata } from "next";
import ShortListingServiceChunk from "@/chunks/shortlisting-template-chunk/shortlisting-service-chunk/ShortListingServiceChunk";

export const metadata: Metadata = {
  title: "The Intern Place | Login ",
  description: "The Intern Place",
};

function page() {
  return <ShortListingServiceChunk />;
}

export default page;
