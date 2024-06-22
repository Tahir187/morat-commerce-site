import React from "react";
import Hero from "../components/Hero";
import TrendingPage from "./TrendingPage";
import TrendingStyle from "../components/TrendingStyle";
import FashionCard from "../components/FashionCard";

const Home = () => {
  return (
    <section>
      <Hero />
      <TrendingPage />
      <TrendingStyle />
      <FashionCard />
    </section>
  );
};

export default Home;
