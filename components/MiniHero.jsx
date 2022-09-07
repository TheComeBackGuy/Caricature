import React, { useEffect, useState } from "react";

import styled from "styled-components";

const HeroContainer = styled.section`
  width: 100%;

  height: 30vh;
  min-height: 250px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  // background-color: yellow;
  overflow: hidden;
  background-position: top center;
  background-size: cover;
  border-top: 10px solid orange;
`;

const Headliner = styled.h1`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  font-size: 4.5em;
  color: white;
  filter: drop-shadow(0 0.1rem 0.2rem orangered);
  padding-bottom: 10px;
  line-height: 1em;
  @media (max-width: 750px) {
    font-size: 3em;
  }
`;

export default function MiniHero({ page, text }) {
  const [displayText, setDisplayText] = useState("none");
  const [pageImage, setPageImage] = useState("");
  useEffect(() => {
    switch (page) {
      case "home":
        setDisplayText("flex");
        setPageImage("../images/bannerYellow.jpg");
        break;
      case "contact":
        setDisplayText("none");
        setPageImage("../images/banner.jpg");
        break;
      case "my-story":
        setDisplayText("none");
        setPageImage("../images/banner-mystory.jpg");
        break;
      case "live-caricature":
        setDisplayText("none");
        setPageImage("../images/liveBanner.jpg");
        break;
      case "comish":
        setDisplayText("none");
        setPageImage("../images/comishBanner.jpg");
        break;
    }

    // setDisplayText("none");
  }, [page]);

  return (
    <HeroContainer style={{ backgroundImage: `url("${pageImage}")` }}>
      <Headliner style={{ display: displayText }}>
        <img src="/images/sillyText.png" alt="Silly Art. Serious Fun." />
      </Headliner>
    </HeroContainer>
  );
}
