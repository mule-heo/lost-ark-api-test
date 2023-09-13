import { Button } from "shared/ui/button";
import { Header as StyledHeader } from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiInstance } from "shared/api/axios";

// TODO: 버튼과 API 키 입력 모달 연결하기

export const Header = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const inputApiKey = () => {
    const API_KEY = prompt("API 키를 입력하십시오.");
    setApiKey(API_KEY);
  };
  const deleteApiKey = () => {
    setApiKey(null);
    alert("로그아웃합니다.");
    localStorage.removeItem("API_KEY");
  };

  useEffect(() => {
    const key = localStorage.getItem("API_KEY");
    key && setApiKey(key);
  });
  useEffect(() => {
    if (apiKey) {
      localStorage.setItem("API_KEY", apiKey);
      apiInstance.defaults.headers.common["authorization"] = `bearer ${apiKey}`;
    } else {
      apiInstance.defaults.headers.common["authorization"] = undefined;
    }
  }, [apiKey]);
  return (
    <StyledHeader>
      <Link to="/">
        <img src="" alt="로고" />
      </Link>
      <span>
        <Link to="/api">API 테스트</Link>
      </span>
      <span>
        <a href="https://developer-lostark.game.onstove.com/">
          로스트아크 공식 개발자 포탈
        </a>
      </span>
      <Button
        theme="warning"
        size="medium"
        onClick={apiKey ? deleteApiKey : inputApiKey}
      >
        {apiKey ? "로그아웃" : "API 키 입력"}
      </Button>
    </StyledHeader>
  );
};
