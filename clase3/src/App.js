import Greeting from "./components/Greeting";
import TaskList from "./components/TaskList";
import TreeImage from "./components/TreeImage";
import { useState } from "react";
import "./App.css";

function App() {
  const [showThings, setShowThings] = useState(false);

  const showOrHide = () => {
    setShowThings(!showThings);
  };

  return (
    <div className="App">
      <span>My first react app</span>
      <Greeting saludo="Hola" />
      <TaskList />
      <TreeImage showImage={showThings} showOrHideImage={showOrHide} />
    </div>
  );
}

export default App;
