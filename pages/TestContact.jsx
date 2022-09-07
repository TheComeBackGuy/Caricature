import Banner from "../images/banner.jpg";
import CopyButton from "../components/CopyButton";
import GlobalLink from "../components/GlobalLink";
import Layout from "../components/Layout";
import LiveEventForm from "../components/LiveEventForm";
import MiniHero from "../components/MiniHero";
import React from "react";
import styled from "styled-components";

const BodyContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 1000px;
  padding: 30px;
`;

const Heading1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.75em;
`;
export default function TestContact() {
  const email = "drawmestuff";
  const domain = "gmail";
  const facebookProfile = "hartsyfartsyevents";
  return (
    <Layout>
      <MiniHero image={Banner} />
      <BodyContainer>
        <Heading1>Contact Me</Heading1>
        <p>
          The best way to initially get a hold of me is through email, but here
          are a couple different ways you can reach out:
        </p>
        <CopyButton text="Email" textToCopy={`${email}@${domain}.com`} />
        <GlobalLink
          text="Facebook"
          link={`https://www.facebook.com/${facebookProfile}`}
        />

        <GlobalLink
          text="Instagram"
          link={`https://www.instagram.com/${facebookProfile}`}
        />
        <LiveEventForm />
      </BodyContainer>
    </Layout>
  );
}
