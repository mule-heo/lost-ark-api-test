import { Button } from "shared/ui/button";
import { Header as StyledHeader, LogoImg } from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { APIKeyContext } from "shared/context/api-key";

// TODO: 버튼과 API 키 입력 모달 연결하기

export const Header = () => {
  const { APIKey, inputAPIKey, deleteAPIKey } = useContext(APIKeyContext);

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
        onClick={APIKey ? deleteAPIKey : inputAPIKey}
      >
        {APIKey ? "로그아웃" : "API 키 입력"}
      </Button>
    </StyledHeader>
  );
};
