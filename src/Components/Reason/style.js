import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: #4f4f4f;
  margin-bottom: 100px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  justify-content: space-between;
`;
