import { Meta } from "@storybook/react";
import ExperienceProfileCard from "./ExperienceProfileCard";
import { ExperienceProfileCardStory } from "./ExperienceProfileCard.type";

const ExperienceProfileCardMeta = {
  title: "Components/Cards/DashboardProfileCard/ExperienceProfileCard",
  component: ExperienceProfileCard,
} satisfies Meta<typeof ExperienceProfileCard>;

export const DefaultStory: ExperienceProfileCardStory = {
  args: {
    id: "2",
    img: "",
    title: "Growth Marketing Designer",
    subtitle: "GoDaddy",
    date: "Full-Time . Jun 2019 - Present (1y 1m)",
    condition: "Manchester, UK",
    description:
      "Developed digital marketing strategies, activation plans, proposals, contests and promotions for client initiatives",
  },
  name: "ExperienceProfileCard",
};

export default ExperienceProfileCardMeta;
