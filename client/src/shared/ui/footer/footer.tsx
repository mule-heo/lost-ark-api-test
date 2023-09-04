import { Footer as StyledFooter } from "./style";

export const Footer = () => {
  return (
    <StyledFooter>
      <span>ⓒ 2023 Jinwoo Heo</span>
      <span>
        이 서비스에서 사용하는 API에 대한 모든 권리는 Smilegate RPG에 있습니다.
      </span>
      <a href="https://developer-lostark.game.onstove.com/agreement">
        API 이용 약관
      </a>
    </StyledFooter>
  );
};
