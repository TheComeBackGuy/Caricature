import { FaRegCopy } from "react-icons/fa";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 1em;
  padding: 1em;
  font-size: 1.25em;
  background-color: var(--blue);
  color: white;
  border-radius: 4px;
  filter: drop-shadow(0 0.25rem 0.2rem #ccc);
  text-decoration: none;

  border: none;
  &:hover {
    background-color: var(--lightBlue);
  }
`;

export default function GlobalButton({ text, callback }) {
  return (
    <Button
      onChange={() => {
        callback();
      }}
    >
      <FaRegCopy />
      {text}
    </Button>
  );
}
