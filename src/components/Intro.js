import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import "./Intro.scss";

const Intro = () => {
  useEffect(() => {
    const text = new SplitType("#introPara", { types: "words, chars" });
    gsap.from(text.chars, {
      opacity: 0,
      y: 100,
      duration: 0.8,
      stagger: { amount: 0.1 },
      scrollTrigger: {
        start: 400,
      },
    });

    // gsap.from(".box", {
    //   width: 0,
    //   height: 0,
    //   scrollTrigger: {
    //     start: 870,
    //   },
    // });
    gsap.from([".innerBorder", ".outerBorder"], {
      opacity: 0,
      delay: 0.6,
      scrollTrigger: {
        start: 400,
      },
    });
    gsap.from(".hello", {
      opacity: 0,
      duration: 1,
      delay: 0.6,
      scrollTrigger: {
        start: 400,
      },
    });
  }, []);

  return (
    <div className="introSection" id="intro">
      <div className="leftIntro">
        {/* <div className="introContainer"> */}
        <div className="outerBorder">
          <div className="innerBorder">
            <div className="box">
              <img src={require("../assets/me.jpg")} width={303} alt="" />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="rightIntro">
        <div>
          <p className="introPara" id="introPara">
            Hello strangers! 👋 My name in Omkar and I am a Frontend Developer,
            passionate about digital products that help people experience
            everyday life, not endure it.
          </p>
          <a
            className="hello"
            href="mailto: omkarbdarde@gmail.com"
            target="_blank"
            //   onmouseover="mouseOver()" onmouseleave="mouseOut()"
          >
            <u>say Hello</u> !
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
