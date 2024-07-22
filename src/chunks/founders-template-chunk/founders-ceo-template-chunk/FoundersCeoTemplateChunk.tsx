import React from "react";
import Image from "next/image";
import ceo from "public/images/Ibunkun Amosu.svg";
import linkdin from "public/images/LinkedIn.svg";
import x from "public/images/X.svg";

const FoundersCeoTemplateChunk = () => {
  return (
    <section className="flex flex-col items-center justify-center w-[100%] mb-[5rem]">
      {/* About CEO */}
      <div className="flex md:flex-row flex-col md:justify-evenly items-center md:gap-[30px] py-[5rem] md:py-[3rem] max-w-[1350px] px-6 md:px-10 lg:px-16 xl:px-0">
        {/* Image */}

        <div className="md:w-[350px] md:h-[350px] w-[300px] h-[300px]">
          <Image src={ceo} alt="ibunkun_pics" className="w-full h-full" />
          {/* <Image
            src={ceo2}
            alt="ibunkun_pics"
            className="w-full h-full rounded-[20px]"
          /> */}
        </div>

        {/* text */}
        <div className="gap-[30px] max-w-[715px] max-h-[324px] text-center md:text-start my-2 md:my-0 w-full">
          <h1 className="font-clash font-[600] text-[24px] leading-[40px] text-light-blue">
            Founder
          </h1>
          <p className="font-epilogue font-[400] text-[18px] leading-[32px] text-grey gap-[10px]">
            Ibunkun Amosu is the visionary founder behind The Intern Place. With
            a passion for empowering young professionals and a deep
            understanding of the African job market, Ibunkun has dedicated his
            career to bridging the gap between emerging talent and top
            employers. His mission is to make The Intern Place the go-to talent
            partner for businesses looking to access a diverse and highly
            skilled workforce.
          </p>

          <ul className="gap-[24px] md:max-w-[88px] w-[100%] flex items-center justify-center mt-2">
            <li className="w-[32px] h-[32px]">
              <Image
                src={linkdin}
                alt="ibunkun_pics"
                style={{ width: "100px", height: "auto" }}
                className="w-full h-full"
              />
            </li>
            <li className="w-[32x] h-[32px]">
              <Image src={x} alt="ibunkun_pics" className="w-full h-full" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FoundersCeoTemplateChunk;
