import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const PromoContainer = styled.div`
  max-width: 325px;
  min-width: 250px;
  text-align: left;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-between;
  background-color: white;
  filter: drop-shadow(0.05em 0.2rem 0.15rem #aaa);
  overflow: hidden;
  border-radius: 4px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
    &:last-child {
      margin: 0;
    }
  }
`;

const Copy = styled.p`
  color: var(--blueBlack);
  margin: 0 1rem 2rem 1rem;
`;
const Heading = styled.h1`
  font-size: 2rem;
  margin: 1rem;
  color: var(--blueShadow);
  line-height: 1em;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-bottom: 5px solid yellowgreen;
  overflow: hidden;
`;

const LearnMore = styled.a`
  display: flex;
  align-self: flex-end;
  margin: 1em;
  padding: 1em;
  font-size: 1.25em;
  background-color: var(--blue);
  color: white;
  border-radius: 4px;
  filter: drop-shadow(0.05em 0.2rem 0.1rem #aaa);
  text-decoration: none;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: var(--blueShadow);
  }
`;

export default function Promo({ heading, copy, image, buttonLink }) {
  return (
    <PromoContainer>
      <div
      // style={{ width: "100%" }}
      >
        <ImageContainer>
          <Image src={image} alt="Image" objectFit="cover" />
        </ImageContainer>
        <Heading>{heading}</Heading>
        <Copy>{copy}</Copy>
      </div>
      <LearnMore href={buttonLink}>Learn More</LearnMore>
    </PromoContainer>
  );
}
