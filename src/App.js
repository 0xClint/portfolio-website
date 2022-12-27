import React, { useEffect } from "react";
import { Home } from "./pages";
import "./App.scss";

function App() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }, []);
  return (
    <div className="App">
      <div className="cursor" id="cursor"></div>
      <Home />
    </div>
  );
}

export default App;
