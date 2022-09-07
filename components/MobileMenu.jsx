import React, { useEffect, useState } from "react";

import Menu from "../Menu.json";
import NavLink from "./NavLink";
import styled from "styled-components";

// import { GiHamburgerMenu } from "react-icons/gi";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: inherit;
  //   border: 1px solid red;
  padding-right: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavContainer = styled.nav`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  flex-flow: column nowrap;
  gap: 2.5em;
  color: var(--blue);
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Exit = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-self: center;
  align-items: center;
  justify-self: center;
  justify-content: center;
  background-color: white;
  width: 1.5em;
  height: 1.5em;
  border-radius: 4px;
  border: none;
  color: var(--blue);
  font-size: 2em;
  z-index: 200;
`;

export default function MobileMenu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuTheme, setMenuTheme] = useState("none");

  useEffect(() => {
    if (menuIsOpen) {
      setMenuTheme("flex");
    } else {
      setMenuTheme("none");
    }
  }, [menuIsOpen]);

  return (
    <Container>
      {menuIsOpen ? (
        <Exit onClick={() => setMenuIsOpen(!menuIsOpen)}>X</Exit>
      ) : (
        <Exit onClick={() => setMenuIsOpen(!menuIsOpen)}>
          {/* <GiHamburgerMenu /> */}=
        </Exit>
      )}
      {/* <Exit onClick={() => setMenuIsOpen(!menuIsOpen)}>X</Exit> */}
      <NavContainer
      // style={{ display: menuTheme }}
      >
        {Menu.map((link, index) => {
          return (
            <NavLink
              key={index}
              text={link.name}
              link={link.link}
              isMobile={true}
              setMenuIsOpen={setMenuIsOpen}
            />
          );
        })}
      </NavContainer>
    </Container>
  );
}
