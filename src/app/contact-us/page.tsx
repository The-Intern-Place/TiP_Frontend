import React from 'react'
import ContactUsSection from '@/components/ContactSection/ContactUsSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Intern Place | Login ",
    description: "The Intern Place",
};

function page() {
    return (
        <ContactUsSection />
    )
}

export default page