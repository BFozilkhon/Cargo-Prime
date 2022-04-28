import styled from "styled-components";
import imgs from "../../assets/imgs/opener.png";

export const Container = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
`;

Container.Box = styled.div`
  flex: ${({ imgs }) => (imgs ? "5" : "1")};
`;

export const Header = styled.div`
  font-size: 180px;
  line-height: 180px;
  font-weight: 700;
  color: #47abd8;
  margin-left: -10px;
`;

export const Text = styled.div`
  font-size: 20px;
  line-height: 35px;
  margin-bottom: 40px;
`;

export const Button = styled.span`
  padding: 12px 10px;
  font-size: 30px;
  font-weight: 600;
  margin-right: 10px;
  border-radius: 30px;
  color: ${({ active }) => (active ? "white" : "red")};
  background-color: ${({ active }) => (active ? "#47abd8" : "white")};
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    color: white;
    background-color: #47abd8;
  }
`;

export const Img = styled.div`
  background-image: url(${imgs});
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
`;
