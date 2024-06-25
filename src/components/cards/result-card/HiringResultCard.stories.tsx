import { Component } from "react";
import HiringResultCard from "./HiringResultCard";
import { Meta } from "@storybook/react";
import pentagram from "public/pentagram.svg";
import { HiringResultStory } from "./HiringResultCard.types";

const HiringResultMeta = {
  title: "Components/Cards/HiringResultCard",
  component: HiringResultCard,
} satisfies Meta<typeof HiringResultCard>;

export const DefaultStory: HiringResultStory = {
  args: {
    title: "Pentagram",
    img: pentagram,
    jobs: "3 Jobs",
  },
  name: "Hiring Result Card"
};

export default HiringResultMeta;
