import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { TriangleBordered, TriangleFilled } from "../assets";
import "./Projects.scss";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.from("#projectHeading", {
      opacity: 0,
      x: -100,
      // delay: 0.6,
      duration: 0.5,
      scrollTrigger: {
        start: 1300,
      },
    });

    gsap.from(".triangleContainer", {
      opacity: 0,
      delay: 0.6,
      scrollTrigger: {
        start: 1300,
      },
    });
    gsap.from(".triangleBordered", {
      y: -15,
      delay: 0.8,
      scrollTrigger: {
        start: 1300,
      },
    });
  }, []);

  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".projectItem", "skewY", "deg"), // fast
      clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -800);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.5,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });
    gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
  }, []);
  return (
    <div className="projectSection" id="project">
      <div className="projectHeading">
        <h2 id="projectHeading">Projects</h2>
        <div className="triangleContainer">
          <TriangleFilled className="triangleFilled" />
          <TriangleBordered className="triangleBordered" />
        </div>
      </div>

      <div className="projectContainer">
        <div className="projectCardContainer">
          <div className="outerCard">
            <div className="innerCard">
              <div className="projectCard">
                <div
                  className="projectLeft"
                  style={{ backgroundColor: "#3272FF" }}
                >
                  <a
                    href="https://grocery-list-teal.vercel.app/"
                    target="_blank"
                  >
                    <img src={require("../assets/projects/1.png")} alt="" />
                  </a>
                </div>
                <div className="projectRight">
                  <h3>Grocery List</h3>
                  <a
                    href="https://grocery-list-teal.vercel.app/"
                    target="_blank"
                  >
                    Visit the website
                  </a>
                  <p>
                    Project details, about the projects and its features, all
                    the details related to the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="count">01</div>
        </div>

        <div className="projectCardContainer">
          <div className="outerCard">
            <div className="innerCard">
              <div className="projectCard">
                <div
                  className="projectLeft"
                  style={{ backgroundColor: "#2C2C2C" }}
                >
                  <a
                    href="https://crypto-coins-search-website.vercel.app/"
                    target="_blank"
                  >
                    <img src={require("../assets/projects/2.png")} alt="" />
                  </a>
                </div>
                <div className="projectRight">
                  <h3>Crypto Coins</h3>
                  <a
                    href="https://crypto-coins-search-website.vercel.app/"
                    target="_blank"
                  >
                    Visit the website
                  </a>
                  <p>
                    Project details, about the projects and its features, all
                    the details related to the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="count">02</div>
        </div>

        <div className="projectCardContainer">
          <div className="outerCard">
            <div className="innerCard">
              <div className="projectCard">
                <div
                  className="projectLeft"
                  style={{ backgroundColor: "#EDEDED" }}
                >
                  <a href="https://www.iitr.ac.in/emee/" target="_blank">
                    <img src={require("../assets/projects/3.png")} alt="" />
                  </a>
                </div>
                <div className="projectRight">
                  <h3>EMEE Conference </h3>
                  <a href="https://www.iitr.ac.in/emee/" target="_blank">
                    Visit the website
                  </a>
                  <p>
                    Project details, about the projects and its features, all
                    the details related to the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="count">03</div>
        </div>

        <div className="projectCardContainer">
          <div className="outerCard">
            <div className="innerCard">
              <div className="projectCard">
                <div
                  className="projectLeft"
                  style={{ backgroundColor: "#6874FE" }}
                >
                  <a href="https://filechain.vercel.app/" target="_blank">
                    <img src={require("../assets/projects/4.png")} alt="" />
                  </a>
                </div>
                <div className="projectRight">
                  <h3>Filechain </h3>
                  <a href="https://filechain.vercel.app/" target="_blank">
                    Visit the website
                  </a>
                  <p>
                    Project details, about the projects and its features, all
                    the details related to the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="count">04</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
