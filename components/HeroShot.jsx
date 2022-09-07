import React from "react";
import styled from "styled-components";

const HeroContainer = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  // background-color: yellow;
  overflow: hidden;
  background-position: top center;
  background-size: cover;
  border-top: 10px solid var(--blue);
`;

const Headliner = styled.h1`
  display: flex;
  width: 100%;
  max-width: 1000px;
  font-size: 7em;
  color: white;
  filter: drop-shadow(0 0.2rem 0.1rem #873717);
  margin-bottom: 50px;
`;

export default function HeroShot({ image }) {
  //TODO add prop to control the image displayed

  return (
    <HeroContainer
    // style={{ backgroundImage: `url(${image})` }}
    >
      {/* <Headliner></Headliner> */}
    </HeroContainer>
  );
}
