import { useRef } from "react";
import * as S from "./style";
import { Parameter } from "pages/api-page/endpoints";
import { RequestForm } from "entities/request-form";

export const Accordion = (props: {
  requestKey: string;
  requestFn: () => void;
  parameters: Parameter[];
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const handleClickAccordion = () => {
    if (divRef.current) {
      if (divRef.current.style.maxHeight !== "") {
        divRef.current.style.maxHeight = "";
      } else {
        const height = divRef.current.scrollHeight;
        divRef.current.style.maxHeight = `${Math.ceil(height)}px`;
      }
    }
  };

  return (
    <S.DivContainer>
      <button onClick={handleClickAccordion}>열기</button>
      <S.DivHidden ref={divRef}>
        <RequestForm {...props} />
      </S.DivHidden>
    </S.DivContainer>
  );
};
