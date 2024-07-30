import React from "react";
import Image from "next/image";
import { priceImpression } from "@/utils/data/adveertise";

function Responsibilities() {
  return (
    <div className="mb-10">
      <div>
        <h1 className="flex font-bold text-3xl">Responsibilities</h1>
        {priceImpression.map((p) => (
          <ul
            key={p.id}
            className="flex flex-col gap-[22px]  p-[1rem] mx-[0.5rem]"
          >
            <li className="gap-[6px] flex items-center ">
              <Image src={p.img} alt="good" className="w-5 h-5 " />{" "}
              <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                {p.text}
              </h1>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Responsibilities;
