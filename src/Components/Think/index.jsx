import React from "react";
import Cards from "./Cards";
import { Container, Wrapper } from "./style";

export const Think = () => {
  return (
    <Container>
      <Wrapper>
        <Cards />
        <Cards />
        <Cards />
      </Wrapper>
    </Container>
  );
};

export default Think;
