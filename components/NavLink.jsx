import Link from "next/link";
import styled from "styled-components";

const NewLink = styled.a`
  color: red;
`;

const NavStyles = styled.a`
  font-size: 1.25em;
  display: flex;
  height: fit-content;
  background-color: red;
  color: var(--blue);
  text-decoration: none;
  padding: 8px 15px;
  margin-right: 20px;
  border-radius: 8px;
  background-color: white;
  transition: 0.1s ease-in-out;
  align-items: center;
  &:hover {
    background-color: #eee;
    color: var(--blueShadow);
  }
`;

const NavStyleMobile = styled.a`
  font-size: 2em;
  display: flex;
  height: fit-content;
  background-color: white;
  color: var(--blue);
  text-decoration: none;
  padding: 8px 15px;
  margin-right: 20px;
  border-radius: 8px;
  background-color: white;
  transition: 0.1s ease-in-out;
  align-items: center;
  &:hover {
    background-color: #eee;
    color: var(--blueShadow);
  }
`;

export default function NavLink({ text, link, isMobile, setMenuIsOpen }) {
  if (!isMobile) {
    return <NavStyles href={link}>{text}</NavStyles>;
  } else {
    return (
      <NavStyleMobile
        // onClick={() => {
        //   setMenuIsOpen(false);
        // }}
        href={link}
      >
        {text}
      </NavStyleMobile>
    );
  }
}
