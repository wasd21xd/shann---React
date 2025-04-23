import './App.css';
import Header from "./components/Header/header";
import Shann from "./components/Shann/shann";
import Evolution from "./components/evolution/Evolution";
import Engine from "./components/engine/Engine";
import Telemetry from "./components/telemetry/Telemetry";


function App() {
  return (
    <div className="App">
      <Header/>
        <Shann/>
        <Evolution />
        <Engine />
        <Telemetry />
    </div>
  );
}

export default App;
