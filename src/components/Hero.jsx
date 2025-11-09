import React from "react";
import leftLeaf from "../../public/images/hero-left-leaf.png";
import rightLeaf from "../../public/images/hero-right-leaf.png";

const Hero = () => {
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img className="left-leaf" src={leftLeaf} alt="left-leaf" />
        <img className="right-leaf" src={rightLeaf} alt="right-leaf" />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>

              <a href="#coctails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
