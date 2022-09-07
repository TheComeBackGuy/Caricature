import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NewLink = styled.a`
  margin: 1em;
  padding: 1em;
  font-size: 1.25em;
  background-color: var(--blue);
  color: white;
  border-radius: 4px;
  filter: drop-shadow(0 0.25rem 0.2rem #ccc);
  text-decoration: none;
  text-align: center;
  border: none;
  &:hover {
    background-color: var(--lightBlue);
  }
`;

export default function GlobalLink({ text, link }) {
  return <NewLink href={link}>{text}</NewLink>;
}
