import React, { useEffect, useRef, useState } from "react";

import Banner from "../images/banner.jpg";
import CopyButton from "../components/CopyButton";
import GlobalLink from "../components/GlobalLink";
import Head from "next/head";
import Layout from "../components/Layout";
import LiveEventForm from "../components/LiveEventForm";
import MiniHero from "../components/MiniHero";
import ReCAPTCHA from "react-google-recaptcha";
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

const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: 1px solid var(--blue);
  border-radius: 5px;
`;

const Label = styled.label`
  margin-bottom: 1.25em;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  width: 50%;
  min-width: 250px;
`;

const Submit = styled.input`
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid var(--blue);
  background-color: white;
  color: var(--blue);
  font-size: 1.5em;
  disabled: true;
  &:hover {
    cursor: pointer;
    background-color: var(--blue);
    color: white;
  }
  &:active {
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 200px;
  padding: 10px 20px;
  border: 1px solid var(--blue);
  border-radius: 5px;
  margin-bottom: 1.5em;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

const CheckboxLabels = styled.label`
  display: flex;
  flex-flow: row nowrap;
  margin: 0.25em 1em 1.5em 0;
`;

const Checkbox = styled.input`
  margin-left: 0.25em;
`;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [contactBy, setContactBy] = useState("");
  const [token, setToken] = useState("");
  const recaptchaRef = useRef(null);

  const formResult = {
    name,
    email,
    phone,
    contactBy,
    details,
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...formResult,
      }),
    })
      .then(() => {
        handleSuccess();
        // navigate("/thank-you/");
      })
      .catch((error) => alert(error));
  }

  function handleSuccess() {
    console.log("Success!!");
    console.log(formResult);
  }

  // const email = "drawmestuff";
  const domain = "gmail";
  const facebookProfile = "hartsyfartsyevents";
  return (
    <Layout>
      <MiniHero page="contact" />
      <BodyContainer>
        <Heading1>Contact Me</Heading1>
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />

          <Label>
            Name:
            <Input
              name="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Label>
          <Label>
            Email:
            <Input
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Label>
          <Label>
            Phone Number:
            <Input
              name="phone"
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Label>
          {/* <p>How do you prefer to be contacted?</p> */}
          {/* <CheckboxContainer>
            <CheckboxLabels>
              Call{" "}
              <Checkbox
                type="radio"
                name="contact-by"
                value="call"
                // checked={(e) => setContactBy(e.target.value)}
                onChange={(e) => setContactBy("call me")}
              />
            </CheckboxLabels>
            <CheckboxLabels>
              Text{" "}
              <Checkbox
                type="radio"
                name="contact-by"
                value="text"
                // checked={(e) => setContactBy(e.target.value)}
                onChange={(e) => setContactBy("text me")}
              />
            </CheckboxLabels>
            <CheckboxLabels>
              Email{" "}
              <Checkbox
                type="radio"
                name="contact-by"
                value="email"
                // checked={(e) => setContactBy(e.target.value)}
                onChange={(e) => setContactBy("email me")}
              />
            </CheckboxLabels>
          </CheckboxContainer> */}
          <Label>
            <p>
              Please leave the time and date of your event as well as any other
              details you feel are important.
            </p>
            <TextArea
              name="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />

            <Submit type="submit" value="Submit" />
          </Label>
        </Form>

        {/* <Heading1>Contact Me</Heading1>
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
        /> */}
      </BodyContainer>
    </Layout>
  );
}
