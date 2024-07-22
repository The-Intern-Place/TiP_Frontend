import FoundersAllTemplateChunk from "@/chunks/founders-template-chunk/founders-all-template-chunk/FoundersAllTemplateChunk";
import FoundersCeoTemplateChunk from "@/chunks/founders-template-chunk/founders-ceo-template-chunk/FoundersCeoTemplateChunk";
import FoundersHeroTemplateChunk from "@/chunks/founders-template-chunk/founders-hero-section-chunk/FoundersHeroTemplateChunk";
import FoundersOfferTemplateChunk from "@/chunks/founders-template-chunk/founders-offer-section-chunk/FoundersOfferTemplateChunk";

import React from "react";

const page = () => {
  return (
    <div className="w-full overflow-x-hidden bg-[#FAFBFC]">
      <FoundersHeroTemplateChunk />
      <FoundersAllTemplateChunk />
      <FoundersOfferTemplateChunk />
      <FoundersCeoTemplateChunk />
    </div>
  );
};

export default page;
