import { styled } from "styled-components";
import { getFontStyle, FontStyle } from "../typography";
import { Theme, ButtonProps } from "./models";
import { buttonSize, buttonTheme } from "./theme";

/** Please use the 'style' attribute to customize the button in the way that buttonTheme or buttonSize doesn't support. */
export const Button = styled.button<ButtonProps>`
  ${({ theme }: { theme: Theme }) => (theme ? buttonTheme[theme] : "")};
  ${({ size }) => (size ? buttonSize[size] : "")};
  ${({ $width }) => ($width ? `width: ${$width}` : "")};
  ${({ $height }) => ($height ? `height: ${$height}` : "")};
  ${getFontStyle(FontStyle.heading6)};
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
  &::before {
    content: ${({ $prefix }) => ($prefix ? `'${$prefix}'` : "")};
  }
  &::after {
    content: ${({ $suffix }) => ($suffix ? `'${$suffix}'` : "")};
  }
  & svg:first-child {
    padding-right: 12px;
  }
  & svg:last-child {
    padding-left: 12px;
  }
`;
