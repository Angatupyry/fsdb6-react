import "./Greetings.css";

const Greeting = (props) => {
  return (
    <div className="container">
      <p>{props.saludo}</p>
    </div>
  );
};

export default Greeting;
