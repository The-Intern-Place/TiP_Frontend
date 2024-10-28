"use client";
import React, { useRef, useState } from "react";
import { user } from "../../../utils/data/user";

interface ImageProps {
  name: string;
  url: string;
}
const useSettingsHeaderChunk = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [images, setImages] = useState<ImageProps[]>([]);
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
  const onDragOver = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  };
  const onDragLeave = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const onDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsDragging(false);
    // Cast e.target to HTMLInputElement
    const inputElement = e.target as HTMLInputElement;

    // Access the files property
    const files = inputElement.files;

    if (files) {
      const filesArray = Array.from(files);

      filesArray.forEach((file) => {
        if (file.type.split("/")[0] !== "image") return;

        if (!images.some((existingImage) => existingImage.name === file.name)) {
          const newImage = {
            name: file.name,
            url: URL.createObjectURL(file),
          };

          setImages((prevImages) => [...prevImages, newImage]);
        }
      });
    }
  };
  const onFileClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    // Early return if there are no files
    if (!files || files.length === 0) return;

    // Convert FileList to an array for easier manipulation
    const filesArray = Array.from(files);

    filesArray.forEach((file) => {
      // Check if the file is an image
      if (file.type.split("/")[0] !== "image") return;

      // Check if the image already exists
      if (!images.some((existingImage) => existingImage.name === file.name)) {
        // Create a new image object and update state
        const newImage = {
          name: file.name,
          url: URL.createObjectURL(file),
        };

        setImages((prevImages) => [...prevImages, newImage]);
      }
    });
  };
  const deleteUpload = (index: any) => {
    setImages((prevImages) => prevImages?.filter((_, i) => i !== index));
  };
  return {
    findID,
    fileInputRef,
    handleFileClick,
    handleFileChange,
    isDragging,
    setIsDragging,
    onDragOver,
    onDragLeave,
    onDrop,
    onFileClick,
    deleteUpload,
  };
};

export default useSettingsHeaderChunk;
