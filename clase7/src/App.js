import "./App.css";
import RoutesApp from "./RoutesApp";
import Navbar from "./components/Navbar";
import Cat from "./components/http/Cat";
import Age from "./components/http/Age";

function App() {
  return (
    <div className="App">
      {/* <Cat /> */}
      <Age />
      {/* <Navbar />
      <RoutesApp /> */}
    </div>
  );
}

export default App;
