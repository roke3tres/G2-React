import "../CSS/ModeloIFC.css";
import {Link} from "react-router-dom";

function ModeloIFC() {
  return (
    <>
      <div className="navbarifc sticky-top">
        <Link to="/" className="text-decoration-none">
          <h1 className="exit">Exit</h1>
        </Link>
      </div>
      <iframe
        title="IFC"
        style={{width: "100vw", height: "100vh"}}
        src="https://ifcarq.vercel.app"
        frameborder="0"
      ></iframe>
    </>
  );
}

export default ModeloIFC;
