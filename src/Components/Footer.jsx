import React, {useEffect, useState} from "react";
import "../CSS/Footer.css";

const Footer = (props) => {
  const {bottomFooter} = props;
  const [displayBottomFooter, setDisplayBottomFooter] = useState(false);
  useEffect(() => {
    console.log(displayBottomFooter);
    setDisplayBottomFooter(bottomFooter);
  }, [bottomFooter]);

  return (
    <div className={displayBottomFooter ? "footer-bottom" : "footerbackground"}>
      <p className="tel">La Salle Barcelona</p>
      <p className="mail">Máster BIM Management</p>
    </div>
  );
};

export default Footer;
