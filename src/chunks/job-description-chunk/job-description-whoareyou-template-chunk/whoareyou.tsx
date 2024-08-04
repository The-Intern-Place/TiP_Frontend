import React from "react";
import Image from "next/image";
import { whoyouareImpression } from "@/utils/data/job-description";

function Whoyouare() {
    return (
        <div>
            <div>
                <h1 className="flex font-bold text-3xl">Who You Are</h1>
                {whoyouareImpression.map((p) => (
                    <ul
                        key={p.id}
                        className="flex flex-col gap-[22px]  p-[1rem]"
                    >
                        <li className="gap-[6px] flex items-center ">
                            <Image src={p.img} alt="good" className="w-5 h-5 " />{" "}
                            <h1 className="font-[600] font-epilogue text-[#515B6F] text-[14px] leading-[22px]">
                                {p.text}
                            </h1>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default Whoyouare;
