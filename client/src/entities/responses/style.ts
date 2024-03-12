import { fontStyle, FontStyle, PSmallMedium } from "shared/ui/typography";
import { styled } from "styled-components";

export const DivContainer = styled.div`
  border-top: 1px var(--bright-menu-color) solid;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 20px;
  width: 100%;
  & button:last-of-type {
    align-self: center;
  }
`;
export const HeadingRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;
export const Heading = styled.h3`
  ${fontStyle[FontStyle.heading3]};
  color: var(--bright-menu-contrast-color);
`;

export const Table = styled.table`
  border: 1px solid white;
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  & th,
  td {
    border: 1px solid white;
    border-collapse: collapse;
    padding: 0px 20px;
  }
  & th {
    background-color: #353a45;
    color: white;
    ${FontStyle[FontStyle.pSmallRegular]};
    padding-left: 20px;
  }
  & :is(th, td):first-of-type {
    width: 120px;
  }
  & :is(td, pre) {
    color: var(--bright-menu-color);
    background-color: #1f2125;
  }

  pre {
    max-height: 30vh;
    white-space: pre-wrap;
    overflow-y: scroll;
    word-break: break-all;
  }
`;

export const P = styled(PSmallMedium)`
  font-weight: 300;
  color: var(--bright-menu-color);
`;
