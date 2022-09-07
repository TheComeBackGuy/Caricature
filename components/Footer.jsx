import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 75px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: orange;
  color: var(--blueBlack);
  padding: 10px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      This site was lovingly sketched, inked, and colored by Dennis Hart.
      Copyright 2022
    </FooterContainer>
  );
}
