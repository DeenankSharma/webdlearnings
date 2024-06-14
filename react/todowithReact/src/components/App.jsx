import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    setItem(event.target.value);
  }
  function handleClick() {
    setItem("");
    setItems((prevValue) => {
      return [...prevValue, item];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <ul>{items.length > 0 && items.map((i) => <li key={i}>{i}</li>)}</ul>
        </ul>
      </div>
    </div>
  );
}

export default App;
