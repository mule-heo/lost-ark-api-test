import { Button } from "shared/ui/button";
import { Header as StyledHeader, LogoImg } from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { APIKeyContext } from "shared/context/api-key";

// TODO: 버튼과 API 키 입력 모달 연결하기

export const Header = () => {
  const { APIKey, setAPIKey } = useContext(APIKeyContext);
  const inputApiKey = () => {
    const API_KEY = prompt("API 키를 입력하십시오.");
    setAPIKey(API_KEY);
  };
  const deleteApiKey = () => {
    setAPIKey(null);
    alert("로그아웃합니다.");
    localStorage.removeItem("API_KEY");
  };

  return (
    <StyledHeader>
      <Link to="/">
        <LogoImg src={process.env.PUBLIC_URL + "/assets/logo.jpg"} alt="로고" />
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
        onClick={APIKey ? deleteApiKey : inputApiKey}
      >
        {APIKey ? "로그아웃" : "API 키 입력"}
      </Button>
    </StyledHeader>
  );
};
