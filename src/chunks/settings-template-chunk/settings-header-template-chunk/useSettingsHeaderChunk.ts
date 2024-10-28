"use client";
import React, { useRef } from "react";
import { user } from "../../../utils/data/user";

const useSettingsHeaderChunk = () => {
  const findID = (id: number) => {
    const foundID = user.find((item) => item.id === id);
    return foundID;
  };

  return {
    findID,
  };
};

export default useSettingsHeaderChunk;
