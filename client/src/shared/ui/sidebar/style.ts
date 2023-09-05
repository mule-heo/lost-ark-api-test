import { styled } from "styled-components";
import { getFontStyle, FontStyle } from "../typography";

export const Aside = styled.aside`
  position: sticky;
  top: 130px;
  width: 270px;
  background-color: var(--area-dark-color);
  border-radius: 10px;

  ${getFontStyle(FontStyle.pLargeRegular)}
  color: var(--bright-menu-color);

  & ul {
    padding: 10px 0px;
  }
  & ul > li {
    width: 100%;
    height: 30px;
    margin: 20px 0px;
    list-style-type: none;
    border-left: 3px solid transparent;

    & p {
      display: block;
      position: relative;
      cursor: pointer;
      color: var(--bright-menu-color);
      padding-top: 3px;
      padding-left: 30px;
      padding-right: 40px;
      transition: 0.2s;

      &:hover {
        color: var(--success-color);
      }
    }
  }

  & li.item-selected {
    border-color: var(--success-color);
    & p {
      color: var(--success-color);
    }
  }
`;
