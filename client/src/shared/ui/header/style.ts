import { styled } from "styled-components";
import { getFontStyle, FontStyle } from "../typography";

export const Header = styled.header`
  z-index: 2024;

  width: clamp(780px, 100%, 100vw);
  height: 75px;
  background-color: var(--area-dark-color);

  position: sticky;
  top: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > :first-child {
    margin: 0 48px 0 64px;
  }

  & > :not(:first-child) {
    margin-left: 32px;
  }

  & > :last-child {
    margin-left: auto;
    margin-right: 64px;
  }

  & :is(span, img) {
    cursor: pointer;
    color: var(--bright-menu-color);
  }

  & span {
    color: var(--bright-menu-color);
    ${getFontStyle(FontStyle.heading6)};
    transition: 0.2s;
    &:hover {
      color: var(--success-color);
    }
    &:first-of-type {
      margin-left: 0;
    }
  }

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

export const LogoImg = styled.img`
  border-radius: 50%;
  width: 50px;
  filter: drop-shadow(0px 0px 3px white);

  &:hover {
    filter: drop-shadow(0px 1px 4px yellow) drop-shadow(-1px 0px 4px blue);
  }
`;
