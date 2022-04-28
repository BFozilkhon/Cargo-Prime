import React from "react";
import { Card, Container } from "./style";

export const Cards = ({ imgs, text, title }) => {
  return (
    <Container>
      <Container.Title>{title}</Container.Title>
      <Card>
        <Card.Img style={{ width: 40 }} src={imgs} alt="img" />
        <Card.Item>{text}</Card.Item>
      </Card>
    </Container>
  );
};

export default Cards;
