import React from "react";
import ContactUsSection from "@/partials/contact-section/ContactUsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Intern Place | Login ",
  description: "The Intern Place",
};

function page() {
  return <ContactUsSection />;
}

export default page;
