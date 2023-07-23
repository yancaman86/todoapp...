import React, { useState } from "react";
import Table from "./table";

function Main() {
  const [input, setInput] = useState("");
  const [inputs, setInputs] = useState([]);
  const [nextId, setNextId] = useState(1);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      const newInput = {
        id: nextId,
        text: input,
      };
      setInputs([...inputs, newInput]);
      setInput("");
      setNextId(nextId + 1);
    }
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className=" ">
        <h1>Search Box</h1>
        <div>
          <input
            type="text"
            placeholder="Enter"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button className="add-button" type="submit">
            Submit
          </button>
        </div>
        <Table inputs={inputs} setInputs={setInputs} />
      </div>
    </form>
  );
}

export default Main;
