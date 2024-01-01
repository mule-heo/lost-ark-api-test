import { css, styled } from "styled-components";
import { FontStyle } from "./models";

export const fontStyle = {
  heading1: css`
    font-size: 26px;
    font-weight: 700;
    line-height: 32px;
  `,
  heading2: css`
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
  `,
  heading3: css`
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 120% */
  `,
  heading6: css`
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
  `,
  pLargeRegular: css`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  `,
  pSmallRegular: css`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  `,
  pLargeMedium: css`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  `,
  pSmallMedium: css`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  `,
};

export const getFontStyle = (style: FontStyle) => fontStyle[style];

export const H1 = styled.h1`
  ${fontStyle.heading1};
`;
export const H2 = styled.h2`
  ${fontStyle.heading2};
`;
export const H3 = styled.h3`
  ${fontStyle.heading2};
`;
export const H6 = styled.h6`
  ${fontStyle.heading2};
`;
export const PLargeRegular = styled.p`
  ${fontStyle.pLargeRegular};
`;
export const PLargeMedium = styled.p`
  ${fontStyle.pLargeMedium};
`;
export const PSmallRegular = styled.p`
  ${fontStyle.pSmallRegular};
`;
export const PSmallMedium = styled.p`
  ${fontStyle.pSmallMedium};
`;
