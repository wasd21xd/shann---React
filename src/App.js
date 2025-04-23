import './App.css';
import Header from "./components/Header/header";
import Shann from "./components/Shann/shann";
import Evolution from "./components/evolution/Evolution";
import Engine from "./components/engine/Engine";
import Telemetry from "./components/telemetry/Telemetry";
import TractorComponent from "./components/tractora/Tractorcomponent";
import ModalForm from "./components/modalticket/modalticket";
import {useState} from "react";

function App() {
    const[isModalOpen, setModalOpen] = useState(false)

  return (
      <div className="App">
        <Header onOpenModal={() => setModalOpen(true)} />
        <Shann onOpenModal={() => setModalOpen(true)} />
        <Evolution/>
        <Engine/>
        <Telemetry/>
        <TractorComponent />
        <ModalForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
  );
}

export default App;
