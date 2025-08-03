// import { useEffect } from "react";
import { gsap } from "gsap";
// import SplitType from "split-type";
import { Header, Hero, Projects } from "../components";
import Intro from "../components/Intro";
import { ScrollTrigger } from "gsap/all";
import "./Home.scss";
import Contact from "../components/Contact";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Intro />
      <div className="projectItem">
        <Projects />
      </div>
      <iframe
  src="https://querymint.onrender.com/chat.html?userId=querymint-94033f21c2de4dafz&serviceId=98d2998b-085f-4367-a8b3-a38dcff39f57&dataUrl=https%3A%2F%2Fgateway.pinata.cloud%2Fipfs%2Fbafkreigch6fgxzc3mlzskexs7q65cjncx5q7bs4yjwvniva5lkm3htx364"
  width="300"
  height="400"
  style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          border: "none",
          zIndex: 9999,
        }}
></iframe>
      <Contact />
      {/* ***************************************************************************** */}

      {/* <div className="projectSection" id="project"></div> */}
      {/* ********************************* INtro Section****************************** */}

      <div className="footer">Design and Developed with ❤️ by Omkar</div>
    </div>
  );
};

export default Home;
