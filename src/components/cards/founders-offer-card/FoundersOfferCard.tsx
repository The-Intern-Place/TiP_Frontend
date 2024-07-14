import React from "react";
import { FoundersOfferCardProps } from "./FoundersOfferCard.type";
import Image from "next/image";

const FoundersOfferCard = (props: FoundersOfferCardProps) => {
  return (
    <section
      className="flex flex-col border-[1px] rounded-[20px] border-light-blueb bg-[#FFFFFF]
     lg:w-[578px] lg:h-[440px] justify-between items-center w-[100%] "
    >
      <div className="flex-grow gap-[12px] m-[2rem]">
        <h1 className="text-light-blue font-[600] font-clash text-[20px] leading-[24px]">
          {props.title}
        </h1>
        <p className="text-grey pt-[1rem] font-[400] gap-[10px] font-epilogue text-[18px] leading-[25px]">
          {props.description}
        </p>
      </div>

      {props.img && (
        <div className=" justify-center items-center flex lg:w-[643px] w-[450px] h-[180px] lg:h-[203px]">
          <Image
            src={props.img}
            width={100}
            height={200}
            alt="offer_pics"
            className="w-full h-full"
          />
        </div>
      )}

      {props.secondimg && (
        <div className="justify-center flex lg:w-[404px] w-[300px]  lg:h-[242px]">
          <Image
            src={props.secondimg}
            width={100}
            height={200}
            alt="offer_pics"
            className="w-full h-full"
          />
        </div>
      )}

      {props.thirdimg && (
        <div className="justify-center flex w-[298px] h-[298px] ">
          <Image
            src={props.thirdimg}
            width={100}
            height={200}
            alt="offer_pics"
            className="w-full h-full"
          />
        </div>
      )}

      {props.fourthimg && (
        <div className=" justify-center flex w-[370px] h-[294px]  ">
          <Image
            src={props.fourthimg}
            width={100}
            height={200}
            alt="offer_pics"
            className="w-full h-full"
          />
        </div>
      )}
    </section>
  );
};

export default FoundersOfferCard;
