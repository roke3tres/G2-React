import "../CSS/ModeloIFC.css";
import Burger from "./Burger";
import Footer from "./Footer";

function ModeloARQ() {
  return (
    <>
      <Burger />
      <iframe
        title="IFC"
        style={{width: "100vw", height: "100vh"}}
        src="https://ifcarq.vercel.app"
        frameborder="0"
      ></iframe>
      <Footer bottomFooter={true} />
    </>
  );
}

export default ModeloARQ;
