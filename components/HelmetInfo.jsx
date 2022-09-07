import Head from "next/head";
import React from "react";

export default function HelmetInfo() {
  return (
    <Head>
      {/* <!-- Twitter Card --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="HartsyFartsy Caricature" />
      {/* <!-- <meta name="twitter:site" content="@hartsyfartsy" /> --> */}
      {/* <!-- <meta name="twitter:creator" content="@hartsyfartsy" /> --> */}
      <meta
        name="twitter:description"
        content="Caricatures and custom cartoon art!"
      />
      <meta
        name="twitter:image"
        content="https://hartsyfartsyevents.com/images/twitter_social.jpg"
      />
      <meta name="twitter:image:alt" content="HartsyFartsy Twitter Card" />
      {/* <!-- Facebook Card --> */}
      <meta property="og:title" content="HartsyFartsy Caricature" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hartsyfartsyevents.com" />
      <meta property="og:image:type" content="image/jpeg" />

      <meta
        property="og:image"
        content="https://hartsyfartsyevents.com/images/fb_social.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:description"
        content="Caricatures and custom cartoon art!"
      />
    </Head>
  );
}
