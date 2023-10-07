import React, { useState, useEffect } from "react";

function FormComponent({ onSubmit }) {
  const [submitButtonPressed, setSubmitButtonPressed] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function and pass the input value as an argument
    onSubmit(inputValue);
    setSubmitButtonPressed(true);
    //if submit button is pressed, reset the value to empty string
    if (setSubmitButtonPressed) {
      setInputValue("");
    }
    // return <TextComponent />;
  };

  useEffect(() => {
    // storing input name
    setSubmitButtonPressed(true);
  }, [submitButtonPressed]);

  const displayText = () => {};
  return (
    <form onSubmit={handleSubmit} className="myForm">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter something"
      />
      <button type="submit" onClick={displayText}>
        Submit
      </button>
      {/* <div>data: {displayText}</div> */}
    </form>
  );
}
export default FormComponent;
