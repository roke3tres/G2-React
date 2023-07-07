import "../CSS/Home.css";
import React, {useRef} from "react";
// import Somosr2 from "./Somosr2";
import Footer from "./Footer";
import Arrow from "./Arrow";
import Scroll3 from "./Scroll 3";
import Burger from "./Burger";
import About from "./About";

function Home() {
  const aboutRef = useRef(null);
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="container borna">
      <Burger aboutRef={aboutRef} />
      <div className="backgroundimg">
        <div className="titles p-4">
          <h3 className="lavanda text-start grupog2">Grupo G2</h3>
          <hr className="hr" />
          <div className="text-start lavanda">
            <h1 className="bim">BIM</h1>
            <h1 className="management">Management</h1>
          </div>
        </div>
      </div>
      <div className="introduction lavanda">
        <p>
          Lorem ipsum dolor sit amet consectetur. A tortor leo ac sollicitudin
          eu.
        </p>
        <p>Dictum quis cursus tem. Dictum quis cursus tem.</p>
      </div>
      <div onClick={scrollToBottom}>
        <Arrow />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      {/* <Somosr2 /> */}
      <Scroll3 />
      <Footer />
    </div>
  );
}

export default Home;