import "./App.css";
import Semaforo from "./components/Semaforo";
import { useState } from "react";

function App() {
  const colors = ["red", "yellow", "green"];

  return (
    <div className="App">
      {colors.map((item) => {
        return <Semaforo color={item} />;
      })}
    </div>
  );
}

export default App;
