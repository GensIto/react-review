import styled from "styled-components";
import { ReactNode } from "react";

type SectionType = {
  top: string;
  bottom: string;
  children: ReactNode;
};

export const Section = (props: SectionType) => {
  return (
    <StyledSection data-top={props.top} data-bottom={props.bottom}>
      {props.children}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  padding-top: 5rem;
  padding-bottom: 5rem;
  &[data-top="none"] {
    padding-top: 0;
  }
  &[data-bottom="none"] {
    padding-bottom: 0;
  }
  &[data-top="sm"] {
    padding-top: 2rem;
  }
  &[data-bottom="sm"] {
    padding-bottom: 2rem;
  }
  &[data-top="md"] {
    padding-top: 8rem;
  }
  &[data-bottom="md"] {
    padding-bottom: 8rem;
  }
  &[data-top="lg"] {
    padding-top: 11rem;
  }
  &[data-bottom="lg"] {
    padding-bottom: 11rem;
  }
`;
