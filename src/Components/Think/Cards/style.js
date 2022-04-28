import styled from "styled-components";
import { ReactComponent as facebook } from "../../../assets/icons/face.svg";
import { ReactComponent as instagram } from "../../../assets/icons/instagram.svg";
import { ReactComponent as google } from "../../../assets/icons/google.svg";
import profil from "../../../assets/imgs/profil.png";

export const Card = styled.div`
  width: 470px;
  border-radius: 15px;
  padding: 70px 30px;
  display: flex;
  background-color: white;
  transition: all 0.4s;
  :hover {
    transform: scale(1.04);
    filter: drop-shadow(10px 10px 11.102px rgba(255, 255, 255, 0.749));
  }
`;

export const Circle = styled.div`
  width: 100px;
  height: 150px;
  border-radius: 50%;
  background-color: blue;
  flex: 1;
  margin-right: 20px;
  margin-top: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Circle.Profil = styled.div`
  background-image: url(${profil});
  background-size: 100% 100%;
  width: 90%;
  height: 90%;
`;

export const Title = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 600;
`;

export const Item = styled.div`
  font-size: 16px;
  line-height: 20px;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const CircleBorder = styled.div`
  border: 1px solid black;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 10px;
`;

Card.Facebook = styled(facebook)`
  width: 20px;
  height: 20px;
  path {
    fill: black;
  }
`;
Card.Google = styled(google)`
  width: 20px;
  height: 20px;
`;
Card.Instagram = styled(instagram)`
  width: 20px;
  height: 20px;
`;
