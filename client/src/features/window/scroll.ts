import { useEffect } from "react";

export const useScroll = (dependencies: (number | string | boolean)[]) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [...dependencies]);
};
