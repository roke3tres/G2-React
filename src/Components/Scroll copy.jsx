import "../CSS/Home.css";
import React, {useEffect, useState} from "react";

const ScrollableContainer2 = () => {
  const [index, setIndex] = useState(false);
  // const [display, setDisplay] = useState(false);
  const [number, setNumber] = useState(false);
  // const [screen, setScreen] = useState(false);

  useEffect(function onFirstMount() {
    const changeBackground = () => {
      let value = window.scrollY;
      console.log(value);
      let img = document.getElementById("moveLeft");
      let text = document.getElementById("moveUp");
      let text2 = document.getElementById("text2");

      let imgWidth = 280;

      text.style.marginTop = value * -0.2 + "px";
      text2.style.transform = `translateX(${value * -0.2}px)`;

      if (value > 600) {
        img.style.transform = `translateX(${value * 0.2 - 10 - imgWidth}px)`;
      } else {
        img.style.transform = `translateX(-${value * 0.2}px)`;
      }

      if (value > 2400) {
        img.style.transform = `translateX(${
          -1 * (value * 0.8 - 1120) + 80 + imgWidth
        }px)`;
      }

      if (value > 1700) {
        setNumber(true);
      } else {
        setNumber(false);
      }

      if (value > 1100) {
        setIndex(true);
      } else {
        setIndex(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);
  return (
    <div className="allmembers">
      <div className="members">
        <h1 className="somosr2 text-start" id="moveUp">
          Somos R2studio
        </h1>
      </div>
      <div className="membercard">
        <h1 className="somosr2-rodri text-start" id="text2">
          Rodrigo Moreira
        </h1>
        <div className="one-member-rodri" id="moveLeft">
          <div className="member-img-rodri"></div>
          <h4 className="member-rodri text-start">Rodrigo Moreira</h4>
          <p className="member-description text-start">
            Placerat volutpat maecenas egestas diam risus. Tellus egestas id
            gravida vestibulum odio etiam non tortor integer. Diam consectetur
            lectus.
          </p>
          <p className="text-start leer-mas">Leer más</p>
        </div>
      </div>
      <div
        className="thirdfixedText"
        style={{
          zIndex: number ? "10" : "3",
        }}
      ></div>
      <div
        className="secondfixedText"
        style={{
          zIndex: index ? "9" : "5",
          display: "block",
        }}
      ></div>
    </div>
  );
};

export default ScrollableContainer2;
