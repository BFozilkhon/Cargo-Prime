import styled from "styled-components";
import img from "../../assets/imgs/story.png";

export const Container = styled.div`
  display: flex;
  width: 75%;
  align-items: center;
`;

export const Box = styled.div`
  flex: 3;
`;

export const Title = styled.div`
  color: #4f4f4f;
  font-size: 40px;
  margin-bottom: 18.6px;
  font-weight: 600;
`;
export const Text = styled.div`
  color: black;
  font-size: 20px;
  line-height: 27px;
  width: 80%;
`;

export const Img = styled.div`
  background-image: url(${img});
  background-size: 100% 100%;
  flex: 2;
  height: 400px;
`;
