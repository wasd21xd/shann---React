import './App.css';
import React from "react";
import Header from "./components/Header/header";
import Shann from "./components/Shann/shann";
import Evolution from "./components/evolution/Evolution";
import Engine from "./components/engine/Engine";
import Telemetry from "./components/telemetry/Telemetry";
import TractorComponent from "./components/tractora/Tractorcomponent";
import ModalForm from "./components/modalticket/modalticket";
import Slider from './components/slider/Slider'
import VideoBlock from "./components/videoBlock/VideoBlock";
import CallbackBlock from  './components/callbackBlock/CallbackBlcok'
import Footer from './components/footer/Footer'
import {useState} from "react";

function App() {
    const[isModalOpen, setModalOpen] = useState(false)

  return (
      <div className="App">
        <Header onOpenModal={() => setModalOpen(true)} />
        <Shann onOpenModal={() => setModalOpen(true)} />
        <Evolution />
        <Engine/>
        <Telemetry/>
        <TractorComponent />
        <ModalForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
          <Slider />
          <VideoBlock />
          <CallbackBlock />
          <Footer />
      </div>
  );
}

export default App;
