import "./Form.css";
import { useState } from "react";

const Form = ({ showProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <div>
      <input
        className="input"
        value={filteredProducts}
        onChange={(e) => setFilteredProducts(e.target.value)}
      />
      <button className="inputBtn" onClick={(e) => showProducts(e)}>
        Buscar
      </button>
    </div>
  );
};

export default Form;
