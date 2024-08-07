import { Meta } from "@storybook/react";
import CompanyProfileHeroCard from "./CompanyProfileHeroCard";
import founded from "public/images/tip_founded.svg";
import { CompanyProfileHeroCardStory } from "./CompanyProfileHeroCard.type";

const CompnayProfileHeroCardMeta = {
  title: "Component/Card/CompanyprofileHeroCard",
  component: CompanyProfileHeroCard,
} satisfies Meta<typeof CompanyProfileHeroCard>;

export const DefaultStory: CompanyProfileHeroCardStory = {
  args: {
    id: "1",
    img: founded,
    title: "Founded",
    text: "12 September, 2023",
  },
  name: "Company Profile Hero Card",
};

export default CompnayProfileHeroCardMeta;
