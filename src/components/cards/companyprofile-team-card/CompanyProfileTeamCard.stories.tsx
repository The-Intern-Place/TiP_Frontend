import { CompanyProfileTeamCardStory } from "./CompanyProfileTeamCard.type";
import oliverTeam from "public/images/oliverteam.svg";
import CompanyProfileTeamCard from "./CompanyProfileTeamCard";
import { Meta } from "@storybook/react";

const CompanyProfileTeamCardMeta = {
  title: "Components/Card/CompanyprofileTeamCard",
  component: CompanyProfileTeamCard,
} satisfies Meta<typeof CompanyProfileTeamCard>;

export const DefaultStory: CompanyProfileTeamCardStory = {
  args: {
    id: "1",
    img: oliverTeam,
    title: "Oliver Chim",
    text: "CEO & Co-Founder",
  },
  name: "Company Profile Team Card",
};

export default CompanyProfileTeamCardMeta;
