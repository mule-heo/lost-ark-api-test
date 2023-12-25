import { styled } from "styled-components";
import { getFontStyle, FontStyle } from "../typography";
import { Theme, ApiTagProps } from "./models";
import { ApiTagTheme } from "./theme";

export const ApiTag = styled.div<ApiTagProps>`
  min-width: 80px;
  min-height: 2rem;
  ${({ theme }: { theme: Theme }) => (theme ? ApiTagTheme[theme] : "")};
  ${({ $width }) => ($width ? `width: ${$width}` : "")};
  ${({ $height }) => ($height ? `height: ${$height}` : "")};
  ${getFontStyle(FontStyle.heading6)};
  color: var(--font-black-color);
  text-decoration: none;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    opacity: 0.9;
  }
`;
