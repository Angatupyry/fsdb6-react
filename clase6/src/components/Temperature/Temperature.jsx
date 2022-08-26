import { useState } from "react";
import "./temperature.css";

const MAX_TEMPERATURE = 30;
const MIN_TEMPERATURE = 0;

const Temperature = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue === MAX_TEMPERATURE) {
      return;
    }

    setTemperatureValue(temperatureValue + 1);

    if (temperatureValue >= 15) {
      setTemperatureColor("hot");
    }
  };

  const decreaseTemperature = () => {
    if (temperatureValue === MIN_TEMPERATURE) {
      return;
    }
    setTemperatureValue(temperatureValue - 1);

    if (temperatureValue <= 14) {
      setTemperatureColor("cold");
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}
        </div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
};

export default Temperature;
