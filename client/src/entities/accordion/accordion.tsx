import { useRef } from "react";
import * as S from "./style";
import { Parameter, ApiMetadata } from "pages/api-page/endpoints";
import { RequestForm } from "entities/request-form";
import { ApiTag } from "shared/ui/apiTag";
import { Suspense } from "react";

export const Accordion = (props: {
  apiMetadata: ApiMetadata;
  requestKey: string;
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
        {/* TODO: 데이터 변경 div 번쩍이는 현상 해결하기 */}
        <Suspense fallback={<div>suspense</div>}>
          <RequestForm
            divRef={divRef}
            requestKey={props.requestKey}
            parameters={props.parameters}
            method={props.apiMetadata.method}
          />
        </Suspense>
      </S.DivHidden>
    </S.DivContainer>
  );
};
