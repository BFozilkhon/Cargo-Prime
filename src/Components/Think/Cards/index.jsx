import React from "react";
import { Card, Circle, CircleBorder, Flexing, Item, Title } from "./style";

export const Cards = () => {
  return (
    <Card>
      <Circle>
        <Circle.Profil />
      </Circle>
      <div style={{ flex: 2 }}>
        <Title>Fozilkhon Buzrukxojayev</Title>
        <Item>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta itaque
          sed officia adipisci incidunt.
        </Item>
        <Flexing>
          <CircleBorder>
            <Card.Facebook />
          </CircleBorder>
          <CircleBorder>
            <Card.Google />
          </CircleBorder>
          <CircleBorder>
            <Card.Instagram />
          </CircleBorder>
        </Flexing>
      </div>
    </Card>
  );
};

export default Cards;
