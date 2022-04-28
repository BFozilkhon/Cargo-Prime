import styled from "styled-components";
import img from "../../assets/imgs/service.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Container.Header = styled.div`
  font-size: 30px;
  margin-bottom: 50px;
  font-weight: 600;
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  justify-content: space-between;
`;

Container.Card = styled.div`
  width: 32%;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
`;

Container.Img = styled.div`
  background-image: url(${img});
  background-size: 100% 100%;
  width: 60%;
  height: 400px;
`;
