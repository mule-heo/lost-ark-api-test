import { css, RuleSet } from "styled-components";
import { Theme, Size } from "./models";

export const buttonTheme: Record<Theme, RuleSet<object>> = {
  warning: css`
    color: var(--font-white-color);
    background-color: var(--warning-color);
    border: none;
    &:hover {
      background-color: var(--warning-hover-color);
    }
  `,
  darkGreen: css`
    color: var(--success-color);
    background-color: transparent;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--success-color);
    &:hover {
      background-color: rgba(29, 234, 198, 0.1);
    }
  `,
  dark: css`
    color: white;
    background-color: transparent;
    border: 1px solid white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `,
};

export const buttonSize: Record<Size, RuleSet<object>> = {
  small: css`
    width: 170px;
    height: 33px;
  `,
  medium: css`
    width: 170px;
    height: 42px;
  `,
  large: css`
    width: 190px;
    height: 50px;
  `,
};
