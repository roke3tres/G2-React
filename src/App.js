import {Routes, Route} from "react-router-dom";
import VistaPlanos from "./Components/VistaPlanos";
import Home from "./Components/Home";
import "./App.css";
import ModeloIFC from "./Components/ModeloIFC";
import ModeloRevit from "./Components/ModeloRevit";
import Documentacion from "./Components/Documentacion";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/planos" element={<VistaPlanos />} />
        <Route path="/" element={<Home />} />
        <Route path="/modeloifc" element={<ModeloIFC />} />
        <Route path="/modelorevit" element={<ModeloRevit />} />
        <Route path="/documentacion" element={<Documentacion />} />
      </Routes>
    </div>
  );
}

export default App;
