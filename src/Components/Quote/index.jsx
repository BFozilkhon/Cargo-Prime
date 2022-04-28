import React from "react";
import { Btn, Container, Wrap } from "./style";

const Qoute = () => {
  return (
    <Container>
      <Container.Header>Get A Quote</Container.Header>
      <Wrap>
        <Wrap.Input type="text" placeholder="Name" />
        <Wrap.Input type="text" placeholder="Phone" />
        <Wrap.Input type="text" placeholder="E-mail" />
        <Wrap.Input type="text" placeholder="Company name" />
        <Wrap.Input type="text" placeholder="MC #" />
      </Wrap>
      <Wrap>
        <Wrap.TextArea typ="text" placeholder="Notes" />
      </Wrap>
      <Wrap>
        <Wrap.Input type="text" placeholder="To" />
        <Wrap.Input type="text" placeholder="From" />
        <Wrap.Input type="text" placeholder="Pick Up" />
        <Wrap.Input type="text" placeholder="Delevery Time" />
      </Wrap>
      <Btn>Submit</Btn>
    </Container>
  );
};

export default Qoute;
