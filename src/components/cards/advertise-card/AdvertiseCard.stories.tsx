import { Meta } from "@storybook/react";
import IC_Manager from "public/icons/IC_Manager";
import AdvertiseCard from "./AdvertiseCard";
import { AdvertiseCardStory } from "./AdvertiseCard.types";

const AdvertiseCardMeta = {
    title: "Components/Cards/AdvertiseCard",
    component: AdvertiseCard,
} satisfies Meta<typeof AdvertiseCard>;

export const DefaultStory: AdvertiseCardStory = {
    args: { icon: <IC_Manager />, children: "Manager" },
    name: "Advertise Card",
};

export default AdvertiseCardMeta;
