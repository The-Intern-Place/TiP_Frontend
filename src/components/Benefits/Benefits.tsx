import React from 'react'
import Hiring_Fintech from "public/icons/Hiring_Fintech"
import { IC_Finance } from "public/icons/IC_Finance";
import IC_Marketing from "public/icons/IC_Marketing";
import IC_People from "public/icons/IC_People"
import AdvertiseCard from '../cards/advertise-card/AdvertiseCard';


function Benefits() {
    const categories = [
        {
            icon: <IC_Marketing className="group-hover:stroke-white bg-slate-500" />,
            texts: "Get your brand in front of a highly targeted audience. It is a fantastic chance to showcase what makes your brand unique.",
            title: "Brand Awareness",
            openPositions: 1
        },
        {
            icon: (
                <Hiring_Fintech className="group-hover:stroke-white group-hover:fill-white" />
            ),
            texts: "Take advantage of cost-effective advertising rates compared to traditional media, ensuring better ROI for your marketing budget.",
            title: "Affordable Marketing",
            openPositions: 1
        },
        {
            icon: <IC_Finance className="group-hover:stroke-white" />,
            texts: "Access detailed analytics to measure the performance of your ads, track engagement, and optimize your advertising strategy for better results.",
            title: "Analytics & Insight",
            openPositions: 1
        },
        {
            icon: (
                <IC_People className="group-hover:stroke-white group-hover:fill-white" />
            ),
            texts: "Reach an audience that's eager to learn about your brand and what you offer. This means more meaningful interactions and higher rates. ",
            title: "Enhanced Engagement",
            openPositions: 1
        },
    ];
    return (
        <div className="flex justify-between items-center w-full h-full max-w-[1350px] mx-auto px-6 md:px-10 lg:px-16 xl:px-0">
            <div className="mt-14 w-full space-y-4">
                <h1 className="flex justify-center md:text-2xl text-[22px] mb-20 font-semibold leading-10">
                    Benefits of Advertising
                </h1>
                <div className="flex flex-wrap md:grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 gap-4 w-full">
                    {categories.map((c, i) => (
                        <AdvertiseCard key={i} texts={c.texts} icon={c.icon} >
                            {c.title}
                        </AdvertiseCard>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Benefits