import "../CSS/ModeloIFC.css";
import Burger from "./Burger";
import Footer from "./Footer";

function ModeloIFC() {
  return (
    <>
      <Burger />
      <iframe
        title="IFC"
        style={{width: "100vw", height: "100vh"}}
        src="https://g2-ifc-x3yr.vercel.app"
        frameborder="0"
      ></iframe>
      <Footer bottomFooter={true} />
    </>
  );
}

export default ModeloIFC;
