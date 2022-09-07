import Nav from "./Nav";
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding-left: 20px;
  z-index: 1000;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: inherit;
  max-width: 1000px;
  // border: 1px solid red;
`;

const LogoImage = styled.img`
  margin-top: 7px;
  height: inherit;
  // border: 1px solid red;

  @media (max-width: 768px) {
    // width: 120px;
    // margin-top: 20px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <InnerContainer>
        <LogoImage src="/images/logo.svg" alt="HarstFartsy Logo" />
        <Nav />
      </InnerContainer>
    </HeaderContainer>
  );
}
