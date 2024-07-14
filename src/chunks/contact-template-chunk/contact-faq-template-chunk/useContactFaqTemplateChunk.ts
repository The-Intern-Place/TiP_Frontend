"use client";
import { useState } from "react";

export default function useContactFaqTemplateChunk() {
  const [visibleId, setVisibleId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setVisibleId(visibleId === id ? null : id);
  };
  return {
    handleToggle,
    visibleId,
  };
}
