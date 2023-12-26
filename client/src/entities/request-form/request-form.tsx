import { useState } from "react";
import * as S from "./style";
import { Button } from "shared/ui/button";
import { Parameter } from "pages/api-page/endpoints";
import { Responses } from "entities/responses";

export const RequestForm = ({
  requestKey,
  parameters,
}: {
  requestKey: string;
  parameters: Parameter[];
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => setIsActive(!isActive);

  return (
    <>
      <S.DivContainer>
        <S.HeadingRow>
          <S.Heading>Parameters</S.Heading>
          {/* isActive = true일 때,
        1. 요청 버튼 표시
        2. 상단 메뉴에 Cancel 버튼 표시
        3. input 요소 disabled 제거

        isActive = false일 때,
        1. 요청 버튼 숨기기
        2. 상단 메뉴에 Try it out
        3. input 요소 disabled 설정
        */}
          {isActive ? (
            <Button
              theme="dark"
              size="small"
              $width="fit-content"
              style={{ padding: "0 23px" }}
              onClick={handleActive}
            >
              Cancel
            </Button>
          ) : (
            <Button
              theme="darkGreen"
              size="small"
              $width="fit-content"
              style={{ padding: "0 23px" }}
              onClick={handleActive}
            >
              Try it out
            </Button>
          )}
        </S.HeadingRow>
        {parameters.length ? (
          <S.Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {parameters.map(parameter => {
                return (
                  <tr key={parameter.name}>
                    <td>
                      <div>
                        <span>{parameter.name}</span>{" "}
                        {parameter.required && <span>*</span>}
                      </div>
                      <div>{parameter.type}</div>
                      <div>
                        {parameter.isQueryParameter ? "(query)" : "(path)"}
                      </div>
                    </td>
                    <td>
                      <p>{parameter.description}</p>

                      {/* 사용 가능한 값이 제시되었다면 select, option 태그를 활용하여 input을 대체합니다. */}
                      {parameter.availableValues?.length ? (
                        <select disabled={!isActive}>
                          {parameter.availableValues.map(option => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={
                            parameter.type === "number" ? "number" : "input"
                          }
                          disabled={!isActive}
                          required={parameter.required}
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </S.Table>
        ) : (
          <S.P>No parameters</S.P>
        )}
        <Button
          className={isActive ? undefined : "hidden"}
          theme="darkGreen"
          size="small"
          onClick={() => {}}
        >
          Execute
        </Button>
      </S.DivContainer>
      <Responses />
    </>
  );
};
