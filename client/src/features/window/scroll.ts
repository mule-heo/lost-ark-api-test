import { RefObject, useEffect } from "react";

export const useScroll = (dependencies: (number | string | boolean)[]) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [...dependencies]);
};

export const useResizeAccordion = (
  divRef: RefObject<HTMLDivElement>,
  dependencies: (number | string | boolean)[],
) => {
  useEffect(() => {
    if (divRef.current) {
      const height = divRef.current.scrollHeight;
      divRef.current.style.maxHeight = `${Math.ceil(height)}px`;
    }
  }, [...dependencies]);
};
