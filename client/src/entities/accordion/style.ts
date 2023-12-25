import { styled } from "styled-components";
import { PSmallMedium } from "shared/ui/typography";

export const P = styled(PSmallMedium)`
  font-weight: 300;
  color: var(--bright-menu-color);
`;
export const DivContainer = styled.div`
  margin: 100px 0px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  & button:last-of-type {
    align-self: center;
  }
  background-color: var(--background-sub-color);
  border-radius: 20px;
  margin: 0px 30px;
`;

export const Summary = styled.summary`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  gap: 8px;
`;

export const DivHidden = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  width: 100%;
`;
