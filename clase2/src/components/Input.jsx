import { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const actualizarInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={actualizarInput}
        type="text"
        placeholder="Enter Text"
      />
      <p>{inputValue}</p>
    </>
  );
};

export default Input;
