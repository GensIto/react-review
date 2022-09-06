import { ReactNode } from "react";
import styled from "styled-components";
import { pc } from "../hooks/media";

type Container = {
  size: string;
  children: ReactNode;
};

export const Container = (props: Container) => {
  return (
    <StyledContainer data-size={props.size}>{props.children}</StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  &[data-size=""] {
    padding: 0 5vw;
  }
  &[data-size="full"] {
    padding: 0;
  }
  &[data-size="mqfull"] {
    ${pc`
        padding: 0;
    `}
  }
`;
