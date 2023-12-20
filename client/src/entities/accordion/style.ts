import { fontStyle, FontStyle } from "shared/ui/typography";
import { styled } from "styled-components";

export const DivContainer = styled.div`
  margin: 100px 0px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  padding: 6px 20px;
  width: 100%;
  & button:last-of-type {
    align-self: center;
  }
`;
export const DivHidden = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;
