import { ChangeEvent, useState, useEffect, useMemo, RefObject } from "react";
import * as S from "./style";
import { Button } from "shared/ui/button";
import { Parameter } from "pages/api-page/endpoints";
import { Responses } from "entities/responses";
import { useQuery } from "react-query";
import {
  createInitialState,
  createIsQueryParameterBitmask,
} from "features/request-form";
import { apiInstance } from "shared/api/axios";
import { addQueryParameters, injectPathParameters } from "shared/util";
import { resizeAccordion, useDidUpdateEffect } from "features/window";

type StringObj = { [x: string]: string };

export const RequestForm = ({
  divRef,
  method,
  requestKey,
  parameters,
}: {
  divRef: RefObject<HTMLDivElement>;
  method: "GET" | "POST";
  requestKey: string;
  parameters: Parameter[];
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => setIsActive(!isActive);

  const [url, setUrl] = useState(
    (process.env.REACT_APP_API_URL ?? "") + requestKey,
  );
  const [formState, setFormState] = useState(createInitialState(parameters));
  const isQueryParameterBitmask = useMemo(
    () => createIsQueryParameterBitmask(parameters),
    [parameters],
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    updateUrl();
  }, [formState]);

  const updateUrl = () => {
    const queryParameters: StringObj = {};
    const pathParameters: StringObj = {};

    const parameters = Object.keys(formState);
    for (let i = 0; i < parameters.length; i++) {
      if (isQueryParameterBitmask & (1 << i)) {
        queryParameters[parameters[i]] = formState[parameters[i]];
      } else {
        pathParameters[parameters[i]] = formState[parameters[i]];
      }
    }
    let url = injectPathParameters(requestKey, pathParameters);
    url = addQueryParameters(url, queryParameters);
    setUrl((process.env.REACT_APP_API_URL ?? "") + url);
  };

  const handleSubmit = () => {
    fetchData.refetch();
  };

  const fetchData = useQuery<string>({
    queryKey: [requestKey],
    queryFn: async () => {
      if (method === "GET") {
        const result = await apiInstance.get(url);
        return JSON.stringify(result.data, null, 2);
      } else {
        const result = await apiInstance.post(url);
        return JSON.stringify(result.data, null, 2);
      }
    },
    enabled: false,
  });

  useDidUpdateEffect(resizeAccordion, divRef, [fetchData.data ?? ""]);

  return (
    <>
      <S.DivContainer>
        <S.HeadingRow>
          <S.Heading>Parameters</S.Heading>
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
                        <select
                          disabled={!isActive}
                          name={parameter.name}
                          onChange={handleChange}
                          value={formState[parameter.name]}
                        >
                          {parameter.availableValues.map(option => (
                            <option
                              key={option}
                              value={option === "--" ? "" : option}
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={
                            parameter.type === "number" ? "number" : "input"
                          }
                          name={parameter.name}
                          value={formState[parameter.name]}
                          onChange={handleChange}
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
          onClick={handleSubmit}
        >
          Execute
        </Button>
      </S.DivContainer>
      <Responses data={fetchData.data || ""} />
    </>
  );
};
