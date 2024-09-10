import { sideprofiledata } from "@/utils/data/dashboardprofile";
import Image from "next/image";

const SidebarProfileTemplateChunk = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      {sideprofiledata.map((a) => (
        <div
          className="border-[1px] border-[#D6DDEB] bg-[#FFFFFF] p-[24px] gap-[16px] h-[306px] flex flex-col"
          key={a.id}
        >
          <div>
            <h1 className="text-[#002360] font-[600] text-[20px] leading-[24px] font-epilogue">
              {a.title}
            </h1>
          </div>

          <div className="flex flex-col gap-[16px]">
            <ul className="flex gap-[16px]">
              <li className="w-[24px] h-[24px]" key="imgFirst">
                {a.imgMail && (
                  <Image
                    src={a.imgMail}
                    alt="icon"
                    className="w-[24px] h-[24px]"
                  />
                )}
                {a.imgSecond && (
                  <Image
                    src={a.imgSecond}
                    alt="icon"
                    className="w-[24px] h-[24px]"
                  />
                )}
              </li>
              <li key="firstText">
                <span className="text-[#515B6F] font-epilogue text-[16px] leading-[30px] font-[400]">
                  {a.labelFirst}
                </span>
                <br />
                <h1 className="text-[#002360] text-[16px] leading-[30px] font-[400] font-epilogue">
                  {a.firstText}
                </h1>
                {a.instaText && (
                  <h1 className="font-[400] text-[16px] leading-[30px] font-epilogue text-[#0046BF]">
                    {a.instaText}
                  </h1>
                )}
              </li>
            </ul>

            <ul className="flex gap-[16px]">
              <li className="w-[24px] h-[24px]" key="imgSecond">
                {a.imgPhone && (
                  <Image
                    src={a.imgPhone}
                    alt="icon"
                    className="w-[24px] h-[24px]"
                  />
                )}
                {a.imgFirst && (
                  <Image
                    src={a.imgFirst}
                    alt="icon"
                    className="w-[24px] h-[24px]"
                  />
                )}
              </li>
              <li key="secondText">
                <span className="text-[#515B6F] font-epilogue text-[16px] leading-[30px] font-[400]">
                  {a.labelSecond}
                </span>
                <br />
                <h1 className="text-[#002360] text-[16px] leading-[30px] font-[400] font-epilogue">
                  {a.secondText}
                </h1>
                {a.twitterText && (
                  <h1 className="font-[400] text-[16px] leading-[30px] font-epilogue text-[#0046BF]">
                    {a.twitterText}
                  </h1>
                )}
              </li>
            </ul>

            <ul className="flex gap-[16px]">
              <li className="w-[24px] h-[24px]" key="imgThird">
                {a.imgLang && (
                  <Image
                    src={a.imgLang}
                    alt="icon"
                    className="w-[24px] h-[24px]"
                  />
                )}
                {a.imgThird && (
                  <Image
                    src={a.imgThird}
                    alt="icon"
                    className="w-[24px] h-[24px]"
                  />
                )}
              </li>
              <li key="thirdText">
                <span className="text-[#515B6F] font-epilogue text-[16px] leading-[30px] font-[400]">
                  {a.labelThird}
                </span>
                <br />
                <h1 className="text-[#002360] text-[16px] leading-[30px] font-[400] font-epilogue">
                  {a.thirdText}
                </h1>
                {a.webText && (
                  <h1 className="font-[400] text-[16px] leading-[30px] font-epilogue text-[#0046BF]">
                    {a.webText}
                  </h1>
                )}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarProfileTemplateChunk;
