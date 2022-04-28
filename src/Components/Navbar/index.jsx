import React from "react";
import {
  Btn,
  Container,
  Items,
  Logo,
  Menu,
  Navlinks,
  Phone,
  Search,
  Wrapper,
} from "./style";

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Navlinks>
          <Btn>Driver Application</Btn>
          <Btn qizil>Get A Quote</Btn>
          <Phone />
          <Items>Call</Items>
          <Search />
          <Menu />
          <Items>Menu</Items>
        </Navlinks>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
