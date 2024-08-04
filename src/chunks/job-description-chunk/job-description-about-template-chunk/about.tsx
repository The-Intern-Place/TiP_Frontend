import React from "react";
// import FindJobCard from '@/components/cards/find-job-card/FindJobCard'
import { FindJobCardProps } from "@/components/cards/find-job-card/FindJobCard.types";

function About(props: FindJobCardProps) {
    const appliedPercentage =
        (Number(5) / Number(10)) * 100;
    return (
        <div className="mb-5">
            <div>
                <h1 className="flex font-bold text-3xl ml-4 mb-5">About This Role</h1>
                <div className="bg-[#F8F8FD] pb-7 mb-10">
                    <div className="flex items-center justify-start pt-4 w-full pl-5 pr-5">
                        <h1 className="text-[#000000] text-[14px]  leading-[22px] font-[600] ">
                            {5} applied
                            <span className="text-[#7C8493] text-[14px]  leading-[22px] font-[600]  pl-1">
                                of {10} capacity
                            </span>
                        </h1>
                    </div>
                    <div className="w-[95%] h-[6px] rounded-[10px] bg-[#D6DDEB] mt-[1rem] ml-5">
                        <div
                            className="h-[6px] bg-[#56CDAD]"
                            style={{ width: `${appliedPercentage}%` }}
                        ></div>
                    </div>
                </div>
                <div className="px-5">
                    <div className="flex justify-between mt-5 mb-7">
                        <p className="text[#515B6F]">Appply Before</p>
                        <p className="font-bold">July 31, 2021</p>
                    </div>
                    <div className="flex justify-between mb-7">
                        <p className="text[#515B6F]">Job Posted On</p>
                        <p className="font-bold">July 1, 2021</p>
                    </div>
                    <div className="flex justify-between mb-7">
                        <p className="text[#515B6F]">Job Type</p>
                        <p className="font-bold">Full-Time</p>
                    </div>
                    <div className="flex justify-between mb-32">
                        <p className="text[#515B6F]">Salary</p>
                        <p className="font-bold">$75k-$85k USD</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
