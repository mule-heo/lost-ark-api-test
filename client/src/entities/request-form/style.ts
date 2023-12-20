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
    width: clamp(96px, 100%, 200px);
  }
  & td {
    color: var(--bright-menu-color);
    background-color: #1f2125;
  }
`;
