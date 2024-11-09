import { HelpCentreCardProps } from "@/components/cards/help-centre-card/HelpCentreCard.types";
import React from "react";

const useHelpCentreFormTemplateChunck = () => {
  const HelpCentre: HelpCentreCardProps[] = [
    {
      id: 1,
      title: "What is My Applications?",
      paragraph:
        "My Applications is a way for you to track jobs as you move through the application process. Ypu can receive feedbacks from employers as to why you were not qualified for the job, so you can do better in future applications.",
      question: "Was this article helpful?",
    },
    {
      id: 1,
      title: "What is My Applications?",
      paragraph:
        "My Applications is a way for you to track jobs as you move through the application process. Ypu can receive feedbacks from employers as to why you were not qualified for the job, so you can do better in future applications.",
      question: "Was this article helpful?",
    },
    {
      id: 3,
      title: "Not getting replies from jobs you applied to?",
      paragraph:
        "You have to turn on your notifications to receive feedback form jobs you’ve applied to. Go to settings page, click on notifications and tick the box to receive feedback on your applications.",
      question: "Was this article helpful?",
    },
  ];
  const optionsData = ["Most relevant", "Least relevant", "date added"];
  return {
    HelpCentre,
    optionsData,
  };
};

export default useHelpCentreFormTemplateChunck;
