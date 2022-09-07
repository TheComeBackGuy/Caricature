import Banner from "../images/banner-mystory.jpg";
import Image from "next/image";
import Layout from "../components/Layout";
import MiniHero from "../components/MiniHero";
import React from "react";
import Selfie from "../images/promo-selfie.jpg";
import styled from "styled-components";

const BodyContainer = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
  grid-template-areas: "selfie about";
  width: 100%;
  max-width: 1000px;
  padding: 0 30px;
  gap: 20px;
  @media (max-width: 750px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas: "about" "selfie";
  }
`;

const Heading1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.75em;
`;

const Paragraph = styled.p`
  margin-bottom: 2em;
`;

const About = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 30px 0;
  grid-area: about;
  // border: 1px solid red;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  grid-area: selfie;
  // border: 1px solid red;
  @media (max-width: 750px) {
    width: 60%;
  }
`;

export default function MyStory() {
  return (
    <Layout>
      <MiniHero page="my-story" />
      <BodyContainer>
        <ImageContainer>
          <Image
            src={Selfie}
            alt="Dennis Hart"
            // style={{ width: "100%" }}
          />
        </ImageContainer>
        <About>
          <Heading1>My Story</Heading1>
          <Paragraph>
            My name is Dennis Hart and back in 2008 I was an unhappy Graphic
            Designer. I found a job working for a company that subcontracted
            into the Disney hotels in Orlando, FL. After five years at the parks
            I was ready to move on and have an adventure. One of my colleagues
            at Disney reccomended me to a travelling group of artists. I met
            with the owner and was off to my first fair in Vermont.
          </Paragraph>
          <Paragraph>
            I was in love. Vermont was gorgeous and the people were so nice. I'd
            never really travelled before and I began signing up on any and all
            fairs that I could. I pushed my art, I worked on my social skills
            and for the next 5 years I made my living as a travelling caricature
            artist. Vermont, Missouri, North Carolina, Ohio; wherever the road
            lead, that's where I went.
          </Paragraph>
          <Paragraph>
            After five years I was ready for the next step and started my own
            business. I booked fairs, hotels, flights, and whatever else I
            needed and set out to make my own path. Caricature has been the
            closest to what I'd ever call my calling. After fourteen years, I
            still love the work and the freedom it gives me, and the joy it
            brings my guests.
          </Paragraph>
          <cite>- Dennis Hart</cite>
        </About>
      </BodyContainer>
    </Layout>
  );
}
