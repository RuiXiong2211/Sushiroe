import React, { useState } from "react";
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  MobileIconButton,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            <MobileIconButton click={click} />
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                  <NavLinks to='/'>
                      Home
                  </NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to='/'>
                      Services
                  </NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to='/'>
                      Products
                  </NavLinks>
              </NavItem>
              <NavItemBtn>
                  {button ? ()}
              </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
