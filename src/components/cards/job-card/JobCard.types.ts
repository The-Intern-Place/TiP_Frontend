import { StoryObj } from "@storybook/react";
import { ReactNode } from "react"
import JobCardMeta from "./JobCard.stories";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type JobCardProps = {
    image: string | StaticImport,
    title: string,
    company: string,
    location: string,
    duration: string,
    sector: string
}

export type JobCardStory = StoryObj<typeof JobCardMeta>;