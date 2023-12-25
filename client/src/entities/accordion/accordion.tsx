import { useRef } from "react";
import * as S from "./style";
import { Parameter, ApiMetadata } from "pages/api-page/endpoints";
import { RequestForm } from "entities/request-form";
import { ApiTag } from "shared/ui/apiTag";

export const Accordion = (props: {
  apiMetadata: ApiMetadata;
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
      <S.Summary onClick={handleClickAccordion}>
        <ApiTag theme={props.apiMetadata.method}>
          {props.apiMetadata.method}
        </ApiTag>
        <S.P>{props.apiMetadata.endpoint}</S.P>
        <S.P>{props.apiMetadata.description}</S.P>
      </S.Summary>
      <S.DivHidden ref={divRef}>
        <RequestForm {...props} />
      </S.DivHidden>
    </S.DivContainer>
  );
};
