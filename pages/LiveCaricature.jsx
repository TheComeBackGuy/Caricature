import Banner from "../images/liveBanner.jpg";
import Layout from "../components/Layout";
import MiniHero from "../components/MiniHero";
import React from "react";
import styled from "styled-components";

const BodyContainer = styled.section`
  width: 100%;
  max-width: 1000px;
  padding: 30px;
`;

const Section = styled.section`
  margin-bottom: 4em;
`;

const Heading1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.75em;
  color: var(--blue);
`;

const Paragraph = styled.p`
  margin-bottom: 2em;
`;

const PriceList = styled.ul`
  margin: 10px 0;
  display: flex;
  flex-flow: row wrap;
  gap: 0.5em;
  list-style-type: none;
  font-size: 1.5em;
`;

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

export default function LiveCaricature() {
  return (
    <Layout>
      <MiniHero page="live-caricature" />
      <BodyContainer>
        <Heading1>What's the Cost?</Heading1>
        <Section>
          <h1>1. Rates</h1>
          <PriceList>
            <Hours>
              <p> 2 hours</p>
              <Price>$350</Price>
            </Hours>
            <Hours>
              <p>3 hours</p>
              <Price>$475</Price>
            </Hours>
            <Hours>
              <p>4 hours</p>
              <Price>$600</Price>
            </Hours>
            <Hours>
              <p>5 hours</p>
              <Price>$700</Price>
            </Hours>
          </PriceList>
          <Paragraph>
            Please message me for a quote if your event is longer than those
            above.
          </Paragraph>
          <h1>2. Non-Refundable Deposit</h1>
          <Paragraph>
            A small portion of your total is paid up front as a non-refundable
            deposit to book that time period. This is anywhere from $50 to 1/3
            of your total.
          </Paragraph>
          <h1>3. Overtime</h1>
          <PriceList>
            <Hours>
              <p>+½ Hour</p>
              <Price>$75</Price>
            </Hours>
          </PriceList>
        </Section>
        <Section>
          <Heading1>How does all this work?</Heading1>
          <Paragraph>
            Knowing what to expect can be a little daunting. It's not every day
            you hire an artist. So, what's next?
          </Paragraph>
          <h1>1. Send Me a Message</h1>
          <Paragraph>
            Well, first you'll send me a message via the contact page. You want
            to include the date, time and length of your event. You'll also want
            to let me know where your event is. For now, the town it's in will
            do, but the address is always better. After that's done, I'll get
            back to you and let you know if I'm available.
          </Paragraph>
          <h1>2. Pay the Deposit</h1>
          <Paragraph>
            Once we've worked out the details, I'll send an invoice for the
            deposit. It's a non-refundable deposit that's due for the sole
            purpose of booking that day. It ensures I keep that date and time
            open just for you. It's usually something nominal; anywhere from $50
            to a third of your total.
          </Paragraph>
          <h1>3. Pay the Remainder</h1>
          <Paragraph>
            Wow! time flew and here we are a week till the event! This is when
            the rest of the balance is due. Once that is paid, There's nothing
            left until partytime!
          </Paragraph>
          <h1>4. Party Time!</h1>
          <Paragraph>
            It's the day of and your head is spinning! I arrive between 30-45
            minutes early. We confirm where I'll be located and if there are any
            last minute changes that affect what I'm doing. I set up my lap
            easel and do some warm up sketches to get started. If guests come up
            during that time, I simply let them know what my start time is and
            that they're free to watch me warm up if they'd like. Often they do.
          </Paragraph>
          <h1>5. Overtime</h1>
          <Paragraph>
            It gets busy and I get very focused on my guests while I'm drawing.
            The night flies by and we are roughly 30 mins from our decided end
            time.I will try to find you, text you, or send a guest to find you
            to touch base and see if we want to keep going. If that's the case,
            we decide how long. Either way, I notify the guests waiting in line,
            estimate how many people I can draw in the remaining time and cut
            the line off if need be. Then I'm back at it til the end. I charge a
            slightly higher fee by the half-hour for this which you can either
            pay at the event (I usually have a Square on me)or settle up after.
          </Paragraph>
        </Section>
        <Section>
          <Heading1>What Do You Need?</Heading1>
          <Paragraph>
            All I need is a roughly 6'x6' covered and lit space to draw. I
            position myself so that back back is to the event so onlookers can
            watch me draw and interact with other guests. There should optimally
            be enough room behind me for a line to form as well.
          </Paragraph>
        </Section>
        <Section>
          <Heading1>What Are You Like With Guests?</Heading1>
          <Paragraph>
            I'm not an artist who just sits quietly and draws. I am a little
            boisterous and love cutting up with guests. While I draw quite
            quickly, it's not my goal to pump out as many drawings as I can but
            to give your guests a great night of laughter AND give them
            something to take home.
          </Paragraph>
        </Section>
      </BodyContainer>
    </Layout>
  );
}
