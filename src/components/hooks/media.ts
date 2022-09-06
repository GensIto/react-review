import { css } from "styled-components";

export const sp = (first: any, ...interpolations: any) => css`
  @media (max-width: 560px) {
    ${css(first, ...interpolations)}
  }
`;

export const md = (first: any, ...interpolations: any) => css`
  @media (min-width: 561px) and (max-width: 1024px) {
    ${css(first, ...interpolations)}
  }
`;
export const pc = (first: any, ...interpolations: any) => css`
  @media (min-width: 1025px) {
    ${css(first, ...interpolations)}
  }
`;

/* 例
import styled from "styled-components";
import { pc, sp, md } from "../hooks/media";
return {
  <H1>TEST</H1>
}
const H1 = styled.button`
  font-size: 16px; 通常
    ${sp`
      font-size: 10px; spサイズ
  `}
    ${md`
      font-size: 10px; タブレットサイズ
  `}
    ${pc`
      font-size: 10px; pcサイズ
  `}
`;
*/
