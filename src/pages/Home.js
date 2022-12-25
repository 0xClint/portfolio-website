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

      <Contact />
      {/* ***************************************************************************** */}

      {/* <div className="projectSection" id="project"></div> */}
      {/* ********************************* INtro Section****************************** */}

      <div className="footer">Design and Developed with ❤️ by Omkar</div>
    </div>
  );
};

export default Home;
