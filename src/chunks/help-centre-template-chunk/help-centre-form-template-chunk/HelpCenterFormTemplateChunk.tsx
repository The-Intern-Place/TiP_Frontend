import FindJobCard from "@/components/cards/find-job-card/FindJobCard";
import HelpCentreCard from "@/components/cards/help-centre-card/HelpCentreCard";
import SelectInput from "@/components/inputs/select-input/SelectInput";
import SelectInput2 from "@/components/inputs/select-input/SelectInput2";
import React from "react";
import useHelpCentreFormTemplateChunck from "./useHelpCentreFormTemplateChunk";
import { ListItem } from "@/utils/types";

const HelpCenterFormTemplateChunk = () => {
  const { optionsData, HelpCentre } = useHelpCentreFormTemplateChunck();
  return (
    <div className="w-full">
      {/* Sort */}
      <div className="flex flex-row gap-0 w-[253px] justify-start items-center">
        <h1 className="w-[30%] font-epilogue text-[18px] font-normal">
          Sort By:
        </h1>
        <div className="w-[75%] mt-[2px]">
          <SelectInput
            overrideStyles="border-[#D6DDEB] border-0 p-0 m-0"
            label=""
            optionsData={optionsData!.map((option: string, index: any) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
            placeholder="Most relevant"
            name=""
          />
        </div>
      </div>
      {/* HelpCentreCard */}
      <div className="flex flex-col items-start gap-6 mb-16">
        {HelpCentre?.map((item, index) => (
          <HelpCentreCard
            id={item?.id}
            title={item?.title}
            paragraph={item?.paragraph}
            question={item?.question}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HelpCenterFormTemplateChunk;
