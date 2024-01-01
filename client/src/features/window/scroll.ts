import { RefObject, useEffect, useRef } from "react";

export const useScroll = (dependencies: (number | string | boolean)[]) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [...dependencies]);
};

export const useResizeAccordion = (
  divRef: RefObject<HTMLDivElement>,
  dependencies: (number | string | boolean)[],
) => {
  const firstExecution = useRef(true);

  useEffect(() => {
    if (firstExecution.current === true) {
      firstExecution.current = false;
      return;
    } else {
      if (divRef.current) {
        const height = divRef.current.scrollHeight;
        divRef.current.style.maxHeight = `${Math.ceil(height)}px`;
      }
    }
  }, [...dependencies]);
};

export const resizeAccordion = (divRef: RefObject<HTMLDivElement>) => {
  if (divRef.current) {
    const height = divRef.current.scrollHeight;
    divRef.current.style.maxHeight = `${Math.ceil(height)}px`;
  }
};

// TODO: 확장성 개선하기
// https://stackoverflow.com/questions/53179075/with-useeffect-how-can-i-skip-applying-an-effect-upon-the-initial-render
export function useDidUpdateEffect(
  fn: (divRef: RefObject<HTMLDivElement>) => void,
  divRef: RefObject<HTMLDivElement>,
  dependencies: (number | string | boolean)[],
) {
  const isMountingRef = useRef(false);

  useEffect(() => {
    isMountingRef.current = true;
  }, []);

  useEffect(() => {
    if (!isMountingRef.current) {
      return fn(divRef);
    } else {
      isMountingRef.current = false;
    }
  }, dependencies);
}
