import React from "react";
import { Header, Wrapper, Container } from "./style";

export const Sponsor = () => {
  return (
    <Container>
      <Header>PARTNERS WHO WORKS WITH US</Header>
      <Wrapper>
        <Container.Amazons />
        <Container.Ups />
        <Container.Fedex />
        <Container.Silchuk />
        <Container.Pepsi />
        <Container.Landstar />
        <Container.Hub />
        <Container.Hunt />
      </Wrapper>
    </Container>
  );
};

export default Sponsor;
