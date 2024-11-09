import { Meta } from "@storybook/react";
import HelpCentreCard from "./HelpCentreCard";
import { HelpCentreCardStory } from "./HelpCentreCard.types";

const HelpCentreCardMeta = {
  title: "",
  component: HelpCentreCard,
} satisfies Meta<typeof HelpCentreCard>;

export const DefaultStory: HelpCentreCardStory = {
  args: {
    id: 1,
    title: "What is My Applications?",
    paragraph:
      "My Applications is a way for you to track jobs as you move through the application process. Ypu can receive feedbacks from employers as to why you were not qualified for the job, so you can do better in future applications.",
    question: "Was this article helpful?",
  },
  name: "Help Centre Card",
};

export default HelpCentreCardMeta;
