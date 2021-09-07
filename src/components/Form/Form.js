import "./Form.css";
import { useState } from "react";

const Form = ({ showProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <div className="inputBox">
      <input
        className="input"
        value={filteredProducts}
        onChange={(e) => setFilteredProducts(e.target.value)}
      />
      <button className="btn seach" onClick={(e) => showProducts(e)}>
        Buscar
      </button>
      <button className="btn all">Todos</button>
    </div>
  );
};

export default Form;
