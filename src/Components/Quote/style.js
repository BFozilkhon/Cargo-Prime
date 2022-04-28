import styled from "styled-components";

export const Container = styled.div`
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
`;

export const Wrap = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

Wrap.Input = styled.input`
  border: 1.657px solid #47abd8;
  background-color: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 15.575px;
  line-height: 23px;
  color: #adacae;
  padding: 12px 15px;
  width: 32%;
  margin: 15px 5px;
`;

Wrap.TextArea = styled.textarea`
  border: 1.657px solid #47abd8;
  background-color: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 15.575px;
  line-height: 23px;
  color: #adacae;
  padding: 12px 15px;
  width: 500px;
  height: 150px;
  margin: 15px 5px;
`;

export const Btn = styled.button`
  outline: none;
  background: #47abd8;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 19.036px;
  line-height: 29px;
  color: #ffffff;
  width: 80%;
  height: 50px;
  margin-top: 36px;
  cursor: pointer;
  :active {
    transform: scale(0.99);
  }
`;
