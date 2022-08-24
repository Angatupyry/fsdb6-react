const Semaforo = ({ color }) => {
  const funcionQueCambiaColor = () => {
    console.log("sht");
  };

  return (
    <div>
      <div
        className="light"
        style={{ backgroundColor: color }}
        onClick={funcionQueCambiaColor}
      ></div>
    </div>
  );
};

export default Semaforo;
