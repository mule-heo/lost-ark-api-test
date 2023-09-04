import { styled } from "styled-components";
import { getFontStyle, FontStyle } from "../typography";

export const Footer = styled.footer`
  width: clamp(780px, 100%, 100vw);
  height: 50px;
  background-color: var(--area-dark-color);

  position: sticky;
  bottom: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: var(--font-mid-color);
  ${getFontStyle(FontStyle.pSmallRegular)};

  & :is(span, a) {
    margin-left: 8px;
  }

  & :first-child {
    margin: 0 auto 0 32px;
  }

  & :last-child {
    margin: 0 32px;
  }

  & a {
    color: var(--font-light-color);
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      color: #ececec;
    }
  }
`;
