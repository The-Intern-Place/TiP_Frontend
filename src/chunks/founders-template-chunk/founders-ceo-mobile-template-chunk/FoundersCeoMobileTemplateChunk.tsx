import React from "react";

import Image from "next/image";
import ceo from "public/images/ceo2.svg";
import linkdin from "public/images/LinkedIn.svg";
import x from "public/images/X.svg";

const FoundersCeoMobileTemplateChunk = () => {
  return (
    <section className="flex flex-col  items-center justify-center w-[100%] my-[2rem] mb-[5rem]">
      {/* heading*/}
      <h1 className="font-clash font-[600] text-[20px] leading-[24px] text-light-blue py-[1rem]">
        Founder
      </h1>

      <div className="flex  flex-col justify-center w-[327px] items-center gap-[12px]">
        {/* Image */}

        <div className="rounded-[20px] w-[229px] h-[237px]">
          <Image
            src={ceo}
            alt="ibunkun_pics"
            className="w-full h-full rounded-[20px]"
          />
        </div>

        {/* text */}

        <p className="font-epilogue font-[400] text-[14px] text-center leading-[30px]  text-grey ">
          Ibunkun Amosu is the visionary founder behind The Intern Place. His
          mission is to make The Intern Place the go-to talent partner for
          businesses looking to access a diverse and highly skilled workforce.
        </p>

        <ul className="gap-[24px] md:max-w-[88px] w-[100%] flex items-center justify-center">
          <li className="w-[32px] h-[32px]">
            {" "}
            <Image src={linkdin} alt="ibunkun_pics" className="w-full h-full" />
          </li>
          <li className="w-[32x] h-[32px]">
            {" "}
            <Image src={x} alt="ibunkun_pics" className="w-full h-full" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FoundersCeoMobileTemplateChunk;
