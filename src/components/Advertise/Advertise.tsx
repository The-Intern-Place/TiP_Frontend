import React from 'react'
import Navbar from "../navbar/Navbar";
import Benefits from '../Benefits/Benefits';
import PricingRate from '../PricingRate/PricingRate';

function Advertise() {
    return (
        <>
            <Navbar />
            <main className="w-full h-full max-w-[1350px] mt-10 mx-auto mb-6">
                <div className="grid justify-items-center mb-12">
                    <h1 className="lg:text-[3.5rem] md:text-[45px] text-4xl font-semibold leading-10 mb-8 ml-8">
                        <span className="text text-[#26A4FF]">Advertise</span>{" "}
                        With TiP
                    </h1>
                    <p className="text sm:w-3/6 mb-3 w-5/6">
                        Advertising with The Intern Place provides businesses with an effective way to reach a highly relevant audience, enhance their brand presence, and drive engagement with their opportunities and services.
                    </p>
                </div>
                <Benefits />
                <PricingRate />
            </main>
        </>
    )
}

export default Advertise