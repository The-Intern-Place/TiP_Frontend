"use client";
import React, { useState } from "react";
import { sideBarData } from "../../../../src/utils/data/sideBar";

const useSidebarChunk = () => {
  const [messages, setMessages] = useState<number>(2);

  return { messages, setMessages, sideBarData };
};

export default useSidebarChunk;
