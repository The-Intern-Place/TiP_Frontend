import FoundersAllTemplateChunk from "@/chunks/founders-template-chunk/founders-all-template-chunk/FoundersAllTemplateChunk";
import FoundersHeroTemplateChunk from "@/chunks/founders-template-chunk/founders-hero-section-chunk/FoundersHeroTemplateChunk";

import React from "react";

const page = () => {
  return (
    <div className="w-full overflow-x-hidden bg-[#FAFBFC]">
      <FoundersHeroTemplateChunk />
      <FoundersAllTemplateChunk />
    </div>
  );
};

export default page;
