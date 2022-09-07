import Bust from "../images/ComishSample.jpg";
import ComishBanner from "../images/comishBanner.jpg";
import ComishProduct from "../components/ComishProduct";
import HeroShot from "../components/HeroShot";
import Layout from "../components/Layout";
import MiniHero from "../components/MiniHero";
import React from "react";
import Theme from "../images/theme.jpg";
import styled from "styled-components";

const BodyContainer = styled.section`
  width: 100%;
  max-width: 1000px;
  padding: 30px;
  // background-color: #eee;
`;

const Heading1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.75em;
`;

const Paragraph = styled.p`
  margin-bottom: 2em;
`;

const Results = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export default function RemoteCommissions() {
  const products = [
    {
      name: "Bust",
      price: 40,
      image: Bust,
      alt: "Bust Caricature Sample",
      description:
        "Each piece is customized to you.The subject is drawn from the bust up in color. I'll have you email/upload pictures for me, then I'll get to work. Please note that each subject being drawn is $40. So, this piece would be $80.",
    },
    {
      name: "Theme",
      price: 80,
      image: Theme,
      alt: "Theme Caricature Sample",
      description:
        "Maybe you're into comics or movies or you want a job-centric piece? This is what you want. I'll work in interests and hobbies to create a more YOU picture. It has a fully rendered background. ",
    },
  ];

  return (
    <Layout>
      {/* <HeroShot page="comish" /> */}
      <MiniHero page="comish" />
      <BodyContainer>
        <Heading1>What are my options?</Heading1>

        <Results>
          {products.map((product, index) => {
            return (
              <ComishProduct
                key={index}
                title={product.name}
                price={product.price}
                image={product.image}
                alt={product.alt}
                description={product.description}
              />
            );
          })}
        </Results>
        <Heading1>How does this work?</Heading1>
        <Paragraph>
          Well, right now my site is still in the development phase. So for the
          time being, head over to the contact form and shoot me a message. I'm
          doing full color caricature busts for $40/head.
        </Paragraph>
      </BodyContainer>
    </Layout>
  );
}
