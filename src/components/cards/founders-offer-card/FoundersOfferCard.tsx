import React from "react";
import { FoundersOfferCardProps } from "./FoundersOfferCard.type";
import Image from "next/image";

const FoundersOfferCard = (props: FoundersOfferCardProps) => {
  return (
    <section
      className="flex flex-col border-[1px] rounded-[20px] border-light-blue bg-[#FFFFFF]
     lg:w-[578px]  justify-between items-center w-[327px]  h-[350px] md:h-[440px]  md:w-full  "
    >
      <div className="flex-grow gap-[12px] md:m-[2rem] p-[7px]">
        <h1 className="text-light-blue font-[600] font-clash text-[20px] leading-[24px] p-[5px] md:p-0">
          {props.title}
        </h1>

        {

props.description &&
        <p className="text-grey md:pt-[1rem]  p-[5px] md:p-0 font-[400] gap-[10px] font-epilogue md:text-[18px] md:leading-[25px] 
        text-[14px] leading-[30px]">
          {props.description}
        </p>
         }

       
      </div>

      {props.img && (
        <div className=" justify-center items-center flex md:w-[643px] w-[381px] h-[127px] lg:h-[203px]">
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
        <div className="justify-center flex md:w-[404px] w-[248px] h-[146px]  lg:h-[242px]">
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
        <div className="justify-center flex md:w-[298px] w-[159px] h-[159px] md:h-[298px] md:mt-[-4rem]">
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
        <div className=" justify-center mt-[-3rem] lg:mb-[-0.2rem]  md:mt-[-7rem]  flex md:w-[370px] lg:h-[294px] w-[258px] h-[258px]  ">
          <Image
            src={props.fourthimg}
            width={100}
            height={200}
            alt="offer_pics"
            className="w-full h-full object-fill"
          />
        </div>
      )}
    </section>
  );
};

export default FoundersOfferCard;
