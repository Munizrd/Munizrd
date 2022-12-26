import React, { useState } from "react";
import "./styles.css";

function App() {
  const [produtos, setProdutos] = useState(["Sabão", "Bombril"]);

  const [input, setInput] = useState("");

  function handleAdd() {
    setProdutos([...produtos, input]);
    setInput("");
  }
  return (
    <div className="container">
      <h1>Adicionar produtos</h1>
      <div className="areaList">
        <ul className="produtos">
          {produtos.map((produtos) => (
            <li>{produtos}</li>
          ))}
        </ul>
      </div>
      <div className="areaBtn">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={handleAdd}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default App;
