import { css, RuleSet } from "styled-components";
import { Theme } from "./models";

export const ApiTagTheme: Record<Theme, RuleSet<object>> = {
  GET: css`
    background-color: var(--success-color);
  `,
  POST: css`
    background-color: var(--neutral-color);
  `,
};
