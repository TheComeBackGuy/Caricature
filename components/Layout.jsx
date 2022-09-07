import Footer from "./Footer";
import Header from "./Header";
import HelmetInfo from "./HelmetInfo";
import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

const LayoutContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export default function Layout({ children }) {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <LayoutContainer>
      <HelmetInfo />
      <Header />

      {children}
      <Footer />
    </LayoutContainer>
  );
}
