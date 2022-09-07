// import { FaRegCopy } from "react-icons/fa";

import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Button = styled.button`
  margin: 1em;
  padding: 1em;
  font-size: 1.25em;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.clr};
  border-radius: 4px;
  filter: drop-shadow(0 0.25rem 0.2rem #ccc);
  text-decoration: none;
  border: ${(props) => props.theme.stroke};
  transition: 0.2s ease-in;
  &:hover {
    background-color: ${(props) => props.theme.hvrBg};
    border: 1px solid var(--lightBlue);
  }
`;

const theme = {
  bg: "var(--blue)",
  clr: "white",
  stroke: "1px solid var(--blue)",
  hvrBg: "var(--lightBlue)",
};
const copied = {
  bg: "white",
  clr: "tomato",
  stroke: "1px solid tomato",
  hvrBg: "white",
};

export default function GlobalButton({ text, textToCopy }) {
  const [managedTheme, setManagedTheme] = useState(theme);
  const [buttonText, setButtonText] = useState(text);

  function copyText() {
    console.log("clicked");
    if (managedTheme === theme) {
      navigator.clipboard.writeText(textToCopy);
      setManagedTheme(copied);
      setButtonText("Email Copied!");
      setTimeout(() => {
        setManagedTheme(theme);
        setButtonText(text);
      }, 2000);
    }
  }

  return (
    <Button theme={managedTheme} onClick={copyText}>
      {/* <FaRegCopy /> */}
      {buttonText}
    </Button>
  );
}
