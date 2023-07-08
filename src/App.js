import {Routes, Route} from "react-router-dom";
import VistaPlanos from "./Components/VistaPlanos";
import Home from "./Components/Home";
import "./App.css";
import ModeloIFC from "./Components/ModeloIFC";
import Documentacion from "./Components/Documentacion";
import ESTifc from "./Components/ESTifc";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/planos" element={<VistaPlanos />} />
        <Route path="/" element={<Home />} />
        <Route path="/modeloifc" element={<ModeloIFC />} />
        <Route path="/estifc" element={<ESTifc />} />
        <Route path="/documentacion" element={<Documentacion />} />
      </Routes>
    </div>
  );
}

export default App;
