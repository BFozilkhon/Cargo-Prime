import React from "react";
import { Button, Container, Header, Img, Text } from "./style";

export const Opener = () => {
  return (
    <Container>
      <Container.Box>
        <Header>
          <span style={{ color: "red" }}>CARGO</span>
          <br /> PRIME
        </Header>
        <Text>
          WE’VE GOT THE TRANSPORTATION SOLUTIONS TO MEET YOUR NEEDS. OUR
          BUSINESS IS BUILT ON TRUSTWORTHY RELATIONSHIPS. THAT IS HOW WE DELIVER
          MAXIMUM VALUE AND EXCEPTIONAL SERVICE EVERY TIME!
        </Text>
        <Button active>DRIVER APLICATION</Button>
        <Button>CALL A RECRUITER</Button>
      </Container.Box>
      <Container.Box imgs>
        <Img />
      </Container.Box>
    </Container>
  );
};

export default Opener;
