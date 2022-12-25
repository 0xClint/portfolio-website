import React, { useEffect } from "react";
import { TriangleBordered, TriangleFilled } from "../assets";
import {
  Email,
  Facebook,
  Github,
  Insta,
  Linkedin,
  Twitter,
} from "../assets/SocialIcon";
import SplitType from "split-type";
import { gsap } from "gsap";
import "./Contact.scss";

const Contact = () => {
  useEffect(() => {
    gsap.from("#contactHeading", {
      opacity: 0,
      x: -100,
      // delay: 0.6,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".mail",
      },
    });
    gsap.from(".contactTriangleContainer", {
      opacity: 0,
      duration: 0.7,
      delay: 0.6,
      scrollTrigger: {
        trigger: ".mail",
      },
    });
    gsap.from(".contactTriangleBordered", {
      y: -15,
      delay: 0.8,
      scrollTrigger: {
        trigger: ".mail",
      },
    });
  }, []);

  useEffect(() => {
    const text = new SplitType(".contactContent", { types: "words, chars" });
    const text2 = new SplitType(".tagline", { types: "words, chars" });
    gsap.from(text.chars, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      delay: 0.3,
      stagger: { amount: 0.1 },
      scrollTrigger: {
        trigger: ".tagline",
      },
    });

    gsap.from(".tagline", {
      opacity: 0,
      y: 100,
      duration: 0.8,
      stagger: { amount: 0.1 },
      scrollTrigger: {
        trigger: ".projectMind",
      },
    });
  }, []);

  return (
    <div className="contactSection">
      <div className="contactHeading">
        <h2 id="contactHeading">Get in Touch</h2>
        <div className="triangleContainer">
          <TriangleFilled className="contactTriangleFilled" />
          <TriangleBordered className="contactTriangleBordered" />
        </div>
      </div>
      <p className="contactContent">
        Thanks for stopping by, I’m currently looking to join a new team of
        creative designers and developers. If you think we might be a good fit
        for one another, send me an email
        <a href="mailto: omkarbdarde@gmail.com" className="mail">
          ✉️
        </a>
        .
      </p>
      <div className="tagline">
        <h2>Don’t be a stranger!</h2>
        <span>👋</span>
      </div>
      <h3 className="projectMind">Got a project in mind? Let’s Talk</h3>
      <div className="socialContainer">
        <a href="https://github.com/Omkar0803" target="_blank">
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/omkar-darde-680041215/"
          target="_blank"
        >
          <Linkedin />
        </a>
        <a href="mailto: omkarbdarde@gmail.com" target="_blank">
          <Email />
        </a>
        <a href="https://github.com/Omkar0803" target="_blank">
          <Insta />
        </a>
        <a href="https://github.com/Omkar0803" target="_blank">
          <Facebook />
        </a>
        <a href="https://github.com/Omkar0803" target="_blank">
          <Twitter />
        </a>
      </div>
    </div>
  );
};

export default Contact;
