
import { StoryObj } from "@storybook/react"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import FindJobCardMeta from "./FindJobCard.stories"





export type FindJobCardProps = {
        img: string | StaticImport
        title: string,
        company: string,
        location: string,
          duration: string,
        sector1: string,
          sector2: string,
          applied: string,
          capacity: string
    }


    export type FindJobCardStory = StoryObj<typeof  FindJobCardMeta >