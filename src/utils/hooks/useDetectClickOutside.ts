import { RefObject, useEffect } from "react";

export const useDetectClickOutside = (
  ref: RefObject<HTMLElement>,
  onClickOutside: any,
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        onClickOutside();
      }
    };
    document.addEventListener("mouseup", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
