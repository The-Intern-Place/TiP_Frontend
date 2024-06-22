import { Component } from "react";
import HiringResultCard from "./hiringResultCard";
import { Meta } from "@storybook/react";
import { HiringResultStory } from "./hiringResultCard.types";
import pentagram from "public/pentagram.svg";

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
};

export default HiringResultMeta;
