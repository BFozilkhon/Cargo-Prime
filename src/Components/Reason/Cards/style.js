import styled from "styled-components";

export const Container = styled.div``;

Container.Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #4f4f4f;
  margin-bottom: 39px;
  text-align: center;
`;

export const Card = styled.div`
  width: 280px;
  padding: 70px 30px;
  background-color: #47abd8;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(7px 7px 18px rgba(0, 0, 0, 0.302));
`;

Card.Img = styled.img`
  margin-bottom: 30px;
`;

Card.Item = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 25px;
  color: #f0fbff;
`;
