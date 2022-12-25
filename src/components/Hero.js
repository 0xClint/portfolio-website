import React, { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import "./Hero.scss";

const Hero = () => {
  useEffect(() => {
    // const text = new SplitType("#text", { types: "words, chars" });
    // gsap.from(text.chars, {
    gsap.from("#text", {
      opacity: 0,
      y: 150,
      duration: 1,
    });

    gsap.from("#square", {
      width: 0,
      height: 0,
      delay: 1,
    });
  }, []);

  useEffect(() => {
    var text = document.getElementById("text");
    var word = text.getElementsByTagName("span");
    let i = 0;
    setInterval(() => {
      word[i].style.display = "none";
      i = (i + 1) % word.length;
      word[i].style.display = "initial";
    }, 1200);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      this.querySelectorAll(".video_container").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 200;
        const y = (window.innerHeight - e.pageY * speed) / 200;

        layer.style.transform = `translateX(${x}px) translateY(${y}px`;
        layer.style.transtion = "0.5s ease-in";
      });
    }
  }, []);
  return (
    <div className="hero">
      <div className="heroLeft">
        <div data-speed="8" className="video_container" id="square"></div>
        <div data-speed="5" className="video_container" id="triangle"></div>
      </div>
      <div className="heroMid">
        <h1 data-speed="13" id="text" className="video_container">
          Hi! I’m <br />
          Omkar.
          <br /> I build <br />
          things for
          <br /> the web
          <span id="span1">2.</span>
          <span id="span2">3.</span>
        </h1>
      </div>

      <div className="heroRight">
        <div data-speed="6" className="video_container" id="square"></div>
        <div data-speed="3" className="video_container" id="triangle"></div>
        <div className="video_container" data-speed="8">
          <div
            className="btn-container "
            id="heroBtn"
            //   onmouseover="mouseOver()"
            //   onmouseleave="mouseOut()"
          >
            <a href="/" className="btn">
              Scroll on
            </a>
            <div className="line"></div>
            <div className="ball"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
