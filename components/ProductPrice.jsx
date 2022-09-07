import React from "react";
import styled from "styled-components";

const Hours = styled.li`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: fit-content;
  background-color: orange;
  // gap: 15px;
  color: white;
  // padding: 15px 15px 25px 15px;
  border-radius: 5px;
  border: 1px solid var(--yellow);
`;

const Price = styled.h1`
  width: 100%;
  text-align: center;
  background-color: white;
  color: var(--blue);
  font-weight: 600;
  padding: 0.5em;
  font-size: 2em;
`;

export default function ProductPrice({ price, unit }) {
  return (
    <Hours>
      <p>{unit}</p>
      <Price>${price}</Price>
    </Hours>
  );
}
