import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as menu } from "../../assets/icons/menu.svg";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  box-shadow: 4px 4px 10px black;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled(logo)``;

export const Navlinks = styled.div`
  display: flex;
  align-items: center;
`;

export const Btn = styled.div`
  padding: 10px 10px;
  font-size: 20px;
  font-weight: 500;
  background-color: ${({ qizil }) => (qizil ? "red" : "#47abd8")};
  color: white;
  text-transform: uppercase;
  border-radius: 30px;
  margin: 0px 10px;
  cursor: pointer;
`;

export const Items = styled.div`
  font-size: 18px;
  color: #47abd8;
  margin-left: 5px;
  cursor: pointer;
`;

export const Phone = styled(phone)`
  width: 25px;
  height: 25px;
`;
export const Search = styled(search)`
  width: 25px;
  height: 25px;
  margin: 0px 30px;
`;
export const Menu = styled(menu)`
  width: 25px;
  height: 25px;
`;
