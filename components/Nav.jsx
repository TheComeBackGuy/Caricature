import Menu from "../Menu.json";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";
import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  color: var(--blue);
  height: 100%;
  // align-items: flex-start;
  justify-content: flex-start;
  margin-left: 40px;
  // border: 1px solid green;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  color: var(--blue);
  height: 100%;
  align-items: center;
  justify-content: center;
  // border: 1px solid red;
  @media (max-width: 750px) {
    display: none;
  }
`;

export default function Nav() {
  return (
    <>
      <NavContainer>
        <MobileMenu />
        <MenuContainer>
          {Menu.map((link, index) => {
            return (
              <NavLink
                key={index}
                text={link.name}
                link={link.link}
                isMobile={false}
              />
            );
          })}
        </MenuContainer>
      </NavContainer>
    </>
  );
}
