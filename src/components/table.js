import React from "react";

function Table({ inputs, setInputs }) {
  const deleteInput = (id) => {
    const newInputs = inputs.filter((input) => input.id !== id);
    setInputs(newInputs);
  };

  const handleExportJSON = () => {
    if (inputs.length > 0) {
      const jsonData = JSON.stringify(inputs, null,  2);
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.json";
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div>
      <ul className="todo-list">
        {inputs.map((input) => (
          <div className="input" key={input.id}>
            <li>{input.text}</li>
            <button
              className="delete-button"
              onClick={() => {
                deleteInput(input.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
      <button onClick={handleExportJSON}>Export JSON</button>
    </div>
  );
}

export default Table;
