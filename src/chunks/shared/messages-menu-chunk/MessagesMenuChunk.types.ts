// import { ListItem } from "@/utils/types";

export type MessagesMenuChunkProps = {
  time: string;
  isUser: any;
  id: number;
  text: string;
  sender: string;
};
export type ConversationsChunkProps = {
  id: number;
  name: string;
  jobTitle: string;
  profileImage: string;
  time: string;
  isUser: boolean;
  // lastMessage: string;
  messages: MessagesMenuChunkProps[];
};
