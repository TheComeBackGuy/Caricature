import Banner from "/images/bannerYellow.jpg";
import Layout from "../components/Layout";
import MiniHero from "../components/MiniHero";
import Promos from "../components/Promos";
import ServiceAreas from "../components/ServiceAreas";

export default function Home() {
  return (
    <Layout>
      <MiniHero page="home" />
      <ServiceAreas />
      <Promos />
    </Layout>
  );
}
