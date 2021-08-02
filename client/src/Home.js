import React from "react";
import Newsletter from "./Newsletter";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <div>
        <section id="hero">
          <Hero />
        </section>
        <section id="newsletter">
          <Newsletter />
        </section>
      </div>
    </div>
  );
};

export default Home;
