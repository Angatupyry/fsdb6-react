import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Greeting from "./components/Greeting/Greeting";
import Tasks from "./components/Task/TaskList";

const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/task" element={<Tasks />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
