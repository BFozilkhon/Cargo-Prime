import styled from "styled-components";
import { ReactComponent as amazons } from "../../assets/icons/amazon.svg";
import { ReactComponent as ups } from "../../assets/icons/ups.svg";
import { ReactComponent as fedex } from "../../assets/icons/fedex.svg";
import { ReactComponent as silchuk } from "../../assets/icons/silchuk.svg";
import { ReactComponent as pepsi } from "../../assets/icons/pepsi.svg";
import { ReactComponent as landstar } from "../../assets/icons/landstar.svg";
import { ReactComponent as hub } from "../../assets/icons/hub.svg";
import { ReactComponent as hunt } from "../../assets/icons/hunt.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  font-size: 40px;
  margin-bottom: 80px;
  color: #808080;
`;

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// icons
Container.Amazons = styled(amazons)`
  width: 200px;
  height: 50px;
  margin: 20px 0px;
`;
Container.Ups = styled(ups)`
  width: 250px;
  height: 60px;
  margin: 20px 0px;
`;
Container.Fedex = styled(fedex)`
  width: 200px;
  height: 50px;
  margin: 20px 0px;
`;
Container.Silchuk = styled(silchuk)`
  width: 200px;
  height: 50px;
  margin: 20px 0px;
`;
Container.Pepsi = styled(pepsi)`
  width: 200px;
  height: 50px;
  margin: 20px 0px;
`;
Container.Landstar = styled(landstar)`
  width: 250px;
  height: 80px;
  margin: 20px 0px;
`;
Container.Hub = styled(hub)`
  width: 250px;
  height: 80px;
  margin: 20px 0px;
`;
Container.Hunt = styled(hunt)`
  width: 200px;
  height: 50px;
  margin: 20px 0px;
`;
