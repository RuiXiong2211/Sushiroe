import React, { useState, useEffect } from "react";
import { Button } from "../../globalStyles";
import sushiLogo from '../../images/home/Sushi.jpg'
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
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src={sushiLogo} alt="sushiLogo" />
            Sushiroe
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            <MobileIconButton click={click} />
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/" activeClassName="is-active" exact>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Menu" activeClassName="is-active">
                Menu
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Admin" activeClassName="is-active">
                Admin
              </NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/Reservation">
                  <Button primary>Make Reservation</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/Reservation">
                  <Button fontBig primary>
                    Make Reservation
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
