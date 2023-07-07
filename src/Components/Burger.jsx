import "../CSS/Burger.css";
import {useState} from "react";
import Collapse from "react-bootstrap/Collapse";
import {Link} from "react-router-dom";

function Burger({aboutRef}) {
  const [open, setOpen] = useState(false);
  const scrollToAbout = () => {
    if (aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({behavior: "smooth"});
    }
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="collapsedmenu">
      <svg
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="burgersvg"
      >
        <g clip-path="url(#clip0_425_582)">
          <circle cx="22.5" cy="22.5" r="22" fill="none" stroke="#4A5FDB" />
          <path d="M12.1152 15H32.8845" stroke="#4A5FDB" stroke-width="2" />
          <path d="M12.1152 22.5H32.8845" stroke="#4A5FDB" stroke-width="2" />
          <path d="M12.1152 30H32.8845" stroke="#4A5FDB" stroke-width="2" />
        </g>
        <defs>
          <clipPath id="clip0_425_582">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="burgermenu">
            <svg
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="burgersvg"
            >
              <g clip-path="url(#clip0_425_582)">
                <circle
                  cx="22.5"
                  cy="22.5"
                  r="22"
                  fill="none"
                  stroke="#c8f955"
                />
                <path
                  d="M12.1152 15H32.8845"
                  stroke="#c8f955"
                  stroke-width="2"
                />
                <path
                  d="M12.1152 22.5H32.8845"
                  stroke="#c8f955"
                  stroke-width="2"
                />
                <path
                  d="M12.1152 30H32.8845"
                  stroke="#c8f955"
                  stroke-width="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_425_582">
                  <rect width="45" height="45" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Link to="/" onClick={toggleMenu} className="text-decoration-none">
              <ul>Home</ul>
            </Link>
            <hr className="burgerhr" />
            <Link
              to="/"
              onClick={scrollToAbout}
              className="text-decoration-none"
            >
              <ul>About</ul>
            </Link>
            <hr className="burgerhr" />
            <Link to="/planos" className="text-decoration-none">
              <ul>Planos</ul>
            </Link>
            <hr className="burgerhr" />
            <Link to="/modelorevit" className="text-decoration-none">
              <ul>Modelo Revit</ul>
            </Link>
            <hr className="burgerhr" />
            <Link to="/modeloifc" className="text-decoration-none">
              <ul>Modelo IFC</ul>
            </Link>
            <hr className="burgerhr" />
            <Link to="/documentacion" className="text-decoration-none">
              <ul>Documentación</ul>
            </Link>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Burger;
