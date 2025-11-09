import React from "react";

const About = () => {

    
  return (
    <>
      <div id="about">
        <div className="mb-16 md:px-0 px-5">
          <div className="content">
            <div className="md:col-span-8">
              <p className="badge">Best Cocktails</p>
              <h2>
                Where every detail matters <span className="text-white">-</span>{" "}
                from muddle to garnish
              </h2>
            </div>

            <div className="sub-content">
              <p>
                Every cocktail we serve is a reflection of our obsession with
                detail — from the first muddle to the final garnish. That care
                is what turns a simple drink into something truly memorable.{" "}
              </p>

              <div>
                <p className="text-xl md:text-3xl font-bold">
                  <span>4.5</span>/5
                  <p className="text-sm text-white-100">
                    more than +12000 customers
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div className="top-grid mt-10">
            <div className="md:col-span-3">
                <div className="noisy">
                    <img src="/public/images/abt1.png" alt="grid-img-1" />
                </div>
            </div>

            <div className="md:col-span-6">
                <div className="noisy">
                    <img src="/public/images/abt2.png" alt="grid-img-2" />
                </div>
            </div>

            <div className="md:col-span-3">
                <div className="noisy">
                    <img src="/public/images/abt5.png" alt="grid-img-5" />
                </div>
            </div>
          </div>


          <div className="bottom-grid">
            <div className="md:col-span-8">
                <div className="noisy">
                    <img src="/public/images/abt3.png" alt="grid-img-3" />
                </div>
            </div>

            <div className="md:col-span-4">
                <div className="noisy">
                    <img src="/public/images/abt4.png" alt="grid-img-4" />
                </div>
            </div>

          </div>


        </div>
      </div>
    </>
  );
};

export default About;
