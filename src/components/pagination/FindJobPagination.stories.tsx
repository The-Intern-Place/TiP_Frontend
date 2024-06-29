import { Meta } from "@storybook/react";
import FindjobPagination from "./FindjobPagination";
import { StoryObj } from "@storybook/react";


const FindjobPaginationMeta: Meta = {
    title:"Components/Pagination/FindJobPagination",
    component: FindjobPagination,
} satisfies Meta<typeof FindjobPagination >;

type FindJobPaginationStory = StoryObj<typeof FindjobPaginationMeta>

export const Story: FindJobPaginationStory = {
    args:{},
    name:"FindJbPagination"
};

export default FindjobPaginationMeta