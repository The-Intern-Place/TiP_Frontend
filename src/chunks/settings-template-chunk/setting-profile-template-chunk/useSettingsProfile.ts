"use client";
import React, { useRef } from "react";
import { user } from "../../../utils/data/user";

const useSettingsHeaderChunk = () => {
  const findID = (id: number) => {
    const foundID = user.find((item) => item.id === id);
    return foundID;
  };
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log("selected file", files[0]);
    }
  };

  return {
    findID,
    fileInputRef,
    handleFileClick,
    handleFileChange,
  };
};

export default useSettingsHeaderChunk;
