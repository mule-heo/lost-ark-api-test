import { Sidebar } from "shared/ui";
import { useState } from "react";

export const ApiPage = () => {
  // TODO: location 접근해서 초깃값 설정하는 게 side effect 있는지 확인하고 수정할 것
  const [currentCategory, setCurrentCategory] = useState<string>(
    location.href
      .replace(location.origin + "/api", "")
      .replace("/", "")
      .toUpperCase() || "NEWS",
  );
  return (
    <>
      <Sidebar
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
    </>
  );
};
