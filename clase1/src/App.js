import "./App.css";

import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <span>Mis primeros componentes en React</span>
      <Greeting saludo="Hola" />
      <Greeting saludo="Adiós" />
    </div>
  );
}

export default App;
