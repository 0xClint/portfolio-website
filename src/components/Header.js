import { useState, useEffect } from "react";
import "./Header.scss";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import { mouseOut, mouseOver } from "../utils/mouseHover";

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    gsap.from(".headerLeft", {
      x: -100,
      duration: 1,
      opacity: 0,
    });
    gsap.from(".headerRight", {
      x: 100,
      duration: 1,
      opacity: 0,
    });
  }, []);

  const handleClick = () => {
    setMenu(!menu);
    if (menu) {
      document.getElementById("navItems").style.transform = "translateX(420px)";
      console.log("haandleMenu");
    } else {
      document.getElementById("navItems").style.transform = "translateX(0)";
    }
  };
  return (
    <div className="header">
      <div className="headerLeft">Omkar</div>
      {/* <div className="headerResume"></div> */}
      <div className="headerRight">
        <div className="navItems" id="navItems">
          <a
            href="https://drive.google.com/file/d/1UkHUbX3cfjgXFPTvUyJna5BN990DK4kW/view?usp=share_link"
            target="_blank"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            <li className="navItem">Resume</li>
          </a>
          <li className="navItem">Home</li>
          <Link to="intro" spy={true} smooth={true} offset={50} duration={500}>
            <li className="navItem">About</li>
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="navItem">Work</li>
          </Link>
        </div>
        <div className="hamburgerMenu" onClick={() => handleClick()}>
          <img src={require("../assets/1.png")} width={25} alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
