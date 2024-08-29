import { Meta } from "@storybook/react";

import EducationProfileCard from "./EducationsProfileCard";
import { EducationProfileCardStory } from "./EducationProfileCard.type";

const EducationProfileCardMeta = {
  title: "Components/Cards/DashboardProfileCard/EducationProfileCard",
  component: EducationProfileCard,
} satisfies Meta<typeof EducationProfileCard>;

export const DefaultStory: EducationProfileCardStory = {
  args: {
    id: "2",
    img: "",
    title: "Growth Marketing Designer",
    subtitle: "GoDaddy",
    date: "Full-Time . Jun 2019 - Present (1y 1m)",
    description:
      "Developed digital marketing strategies, activation plans, proposals, contests and promotions for client initiatives",
  },
  name: "ExperienceProfileCard",
};

export default EducationProfileCardMeta;
