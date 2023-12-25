import { Sidebar } from "shared/ui";
import { useState } from "react";
import { endpoints, Categories } from "./endpoints";
import { Accordion } from "entities/accordion";
import * as S from "./style";

export const ApiPage = () => {
  // TODO: location 접근해서 초깃값 설정하는 게 side effect 있는지 확인하고 수정할 것
  const [currentCategory, setCurrentCategory] = useState<Categories>(
    (location.href
      .replace(location.origin + "/api", "")
      .replace("/", "")
      .toUpperCase() as Categories) || "NEWS",
  );
  return (
    <>
      <Sidebar
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <S.DivContainer>
        <S.Heading1>{currentCategory}</S.Heading1>
        {endpoints[currentCategory.toLocaleLowerCase() as Categories].map(
          endpoint => {
            const apiMetadata = {
              method: endpoint.method,
              endpoint: endpoint.endpoint,
              description: endpoint.description,
            };
            return (
              <Accordion
                key={endpoint.name}
                apiMetadata={apiMetadata}
                requestKey={endpoint.name}
                requestFn={() => console.log("hi")}
                parameters={endpoint.parameters}
              />
            );
          },
        )}
      </S.DivContainer>
    </>
  );
};
