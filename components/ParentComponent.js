import React, { useState, useEffect } from "react";
import FormComponent from "./FormComponent";

function ParentComponent() {
  // set the state

  const [savedText] = useState(localStorage.getItem("text"));
  const [submittedText, setSubmittedText] = useState(
    savedText ? JSON.parse(savedText) : []
  );
  const handleFormSubmit = (data) => {
    console.log(`Data submitted: ${data}`);
    setSubmittedText([...submittedText, data]);
  };

  const handleDelete = (index) => {
    const newData = [...submittedText];
    newData.splice(index, 1);
    setSubmittedText(newData);
    return submittedText;
  };

  //store the items
  useEffect(() => {
    // storing input name
    localStorage.setItem("text", JSON.stringify(submittedText));
  }, [submittedText]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("text"));
    if (items) {
      setSubmittedText(items);
      console.log(items);
    }
  }, []);
  return (
    <div>
      <h1>What are you grateful for today?</h1>
      <FormComponent onSubmit={handleFormSubmit} key="form" />
      <ul>
        {submittedText.map((data, index) => (
          <>
            <button key={"button" + index} onClick={() => handleDelete(index)}>
              Delete
            </button>
            <li key={"data" + index}>{data}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default ParentComponent;
