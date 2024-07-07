import React from 'react'
import Advertise from '@/components/Advertise/Advertise';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Intern Place | Login ",
    description: "The Intern Place",
};

function Page() {
    return (
        <Advertise />
    )
}

export default Page