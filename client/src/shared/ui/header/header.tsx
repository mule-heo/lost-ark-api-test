import { Button } from "shared/ui/button";
import { Header as StyledHeader } from "./style";
import { Link } from "react-router-dom";

// TODO: 버튼과 API 키 입력 모달 연결하기

export const Header = () => {
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
      <Button theme="warning" size="medium">
        API 키 입력
      </Button>
    </StyledHeader>
  );
};
