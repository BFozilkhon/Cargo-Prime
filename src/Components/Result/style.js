import styled from "styled-components";
import { ReactComponent as truck } from "../../assets/icons/truck.svg";
import { ReactComponent as star } from "../../assets/icons/star.svg";
import { ReactComponent as employe } from "../../assets/icons/employe.svg";

export const Container = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Container.Card = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Container.Title = styled.div`
  font-size: 80px;
  font-weight: 700;
  color: #47abd8;
`;

Container.Truck = styled(truck)`
  margin: 30px 0px;
`;

Container.Star = styled(star)`
  margin: 30px 0px;
`;

Container.Employe = styled(employe)`
  margin: 30px 0px;
`;

Container.Item = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: #47abd8;
`;
