import React from "react";
import Cards from "./Cards";
import star from "../../assets/icons/star2.svg";
import settings from "../../assets/icons/settings.svg";
import crown from "../../assets/icons/crown.svg";
import { Container, Wrapper } from "./style";

export const Reason = () => {
  return (
    <Container>
      <Container.Header>WHY PEOPLE CHOOSE US?</Container.Header>
      <Wrapper>
        <Cards
          title="INDUSTRY LEADERSHIP"
          imgs={star}
          text="We care about more than just moving product. We’ve created an extensive and organized transportation network across America."
        />
        <Cards
          title="TECHNOLOGY"
          imgs={settings}
          text="We care about more than just moving product. We’ve created an extensive and organized transportation network across America."
        />
        <Cards
          title="EXCEPTIONAL CUSTOMER "
          imgs={crown}
          text="We care about more than just moving product. We’ve created an extensive and organized transportation network across America."
        />
      </Wrapper>
    </Container>
  );
};

export default Reason;
