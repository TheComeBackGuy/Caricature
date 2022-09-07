import Comish from "../images/comish.jpg";
import Live from "../images/live.jpg";
import Pet from "../images/pet-sample.jpg";
import Promo from "./Promo";
import React from "react";
import styled from "styled-components";

const PromoContainer = styled.section`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 3em 20px;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: center;
  gap: 20px;
  background-color: white;
`;
export default function Promos() {
  return (
    <PromoContainer>
      <Promo
        heading="Live Caricature"
        copy="Whether it's people or pets or both, I come to you and draw as many of your guests as I can."
        image={Live}
        buttonLink="/LiveCaricature"
      />
      <Promo
        heading="Remote Commissions"
        copy="Have an idea your really want drawn of someone? Wanna give someone a gift? Maybe you've just always wanted one? Here's your chance."
        image={Comish}
        buttonLink={"/RemoteCommissions"}
      />

      {/* <Promo
        heading="Pets"
        copy="Whether it's a floof, scaley, or feathered we can draw your adorable life buddy."
        image={Pet}
        buttonLink={"/remote-commissions"}
      /> */}
    </PromoContainer>
  );
}
