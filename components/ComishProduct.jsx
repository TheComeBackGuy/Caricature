import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: fit-content;
  height: auto;
  max-width: 49%;
  box-shadow: 0px 4px 0.5em #ddd;
  background-color: #fff;
  padding: 1em;
  border-radius: 5px;
  border: 1px solid #eee;
  @media (max-width: 768px) {
    max-width: 100%;
    flex-flow: column nowrap;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 3.75em;
  background-color: orange;
  border-radius: 5px;
  // padding: 10px;
  border: 1px solid var(--yellow);
`;

const Price = styled.h1`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  color: var(--blue);
  width: 50%;
  height: 100%;
  font-size: 2.5em;
  // filter: drop-shadow(0 0.07em 0em green);
  // font-weight: 200;
  // margin-right: 10px;
  background-color: white;
`;

const ProductName = styled.h1`
  font-size: 2.5em;
  color: var(--blue);
  margin-bottom: 15px;
  line-height: 1em;
`;

const PerPerson = styled.p`
  display: flex;
  width: auto;
  height: 100%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: var(--lightYellow);
  line-height: 1em;
  text-transform: uppercase;
  padding: 5px;
`;

// const Image = styled.img`
//   width: stretch;
//   // height: auto;
// `;

const ImageContainer = styled.div`
  width: 45%;
  height: 100%;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Description = styled.p`
  color: var(--blueBlack);
`;
export default function ComishProduct({
  image,
  alt,
  price,
  title,
  description,
}) {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={image} alt={alt} />
        <PriceContainer>
          <Price>{price}</Price>
          <PerPerson>per subject</PerPerson>
        </PriceContainer>
      </ImageContainer>
      <div
      // style={{ width: "auto" }}
      >
        <ProductName>{title}</ProductName>
        <Description>{description}</Description>
      </div>
    </ProductContainer>
  );
}
