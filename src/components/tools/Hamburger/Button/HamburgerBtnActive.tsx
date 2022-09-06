import styled from "styled-components";
import { sp } from "../../../hooks/media";

export const HamburgerBtnActive = () => {
  return (
    <>
      <StyledHamburgerBtn>
        <ActiveLine1></ActiveLine1>
        <ActiveLine2></ActiveLine2>
        <ActiveLine2></ActiveLine2>
      </StyledHamburgerBtn>
    </>
  );
};

const StyledHamburgerBtn = styled.div`
  display: none;
  ${sp`
    display: block;
    position: fixed;
    z-index: 3;
    right: 1rem;
    top: 1rem;
    width: 42px;
    height: 42px;
    cursor: pointer;
    text-align: center;
`}
`;
const ActiveLine1 = styled.span`
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  transition: 0.3s ease-in-out;
  top: 16px;
  left: 6px;
  background: #333;
  transform: rotate(-45deg);
`;
const ActiveLine2 = styled.span`
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  transition: 0.3s ease-in-out;
  top: 16px;
  left: 6px;
  background: #333;
  transform: rotate(45deg);
`;
