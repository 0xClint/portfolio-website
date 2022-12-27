import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { TriangleBordered, TriangleFilled } from "../assets";
import "./Projects.scss";
import { gsap } from "gsap";
import { projects } from "../assets/projects";

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
        {projects
          ? projects.map((item, index) => {
              return (
                <div className="projectCardContainer" key={index + 1}>
                  <div className="outerCard">
                    <div className="innerCard">
                      <div className="projectCard">
                        <div
                          className="projectLeft"
                          style={{ backgroundColor: `${item.color}` }}
                        >
                          <a href={item.website} target="_blank">
                            <img src={item.img} alt="" />
                            {/* <img src={require(item.img)} alt="" /> */}
                          </a>
                        </div>
                        <div className="projectRight">
                          <h3>{item.title}</h3>
                          <div className="linkContainer">
                            <a href={item.website} target="_blank">
                              Visit the website
                            </a>
                            {item.github ? (
                              <a href={item.github} target="_blank">
                                Github
                              </a>
                            ) : (
                              ""
                            )}
                          </div>
                          <p>{item.info}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="count">
                    {index < 10 ? `0${index + 1}` : index + 1}
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Projects;
