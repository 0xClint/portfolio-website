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
        src="https://supportly-payment-mediater.onrender.com/chat.html?userId=sptly-94033f21c2de4dafz&projectId=cb2d5bcb-4034-4a1a-9ee4-1726ff8bbf3c&dataUrl=https%3A%2F%2Fgateway.pinata.cloud%2Fipfs%2Fbafkreiecondma6bori6idixh22cnnbq6y4hjt3xxz7fues3fqdpfhkwdo4"
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
