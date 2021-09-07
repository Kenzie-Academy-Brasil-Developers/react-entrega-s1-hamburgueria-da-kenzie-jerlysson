import logo from "./hamburger.png";
import Form from "./components/Form/Form";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import Cart from "./components/Cart/Cart";
import "./App.css";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [currentSale, setCurrentSale] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);

  const showProducts = (e) => {
    const seachItem = e.target.previousSibling.value.toLowerCase();
    const newProd = product.filter(function (item) {
      return item.name.toLowerCase().indexOf(seachItem) > -1;
    });
    setProduct([...newProd]);
  };

  const clickRemove = (e) => {
    const removeItem = e.target.parentNode.firstChild.outerText;
    const newCart = currentSale.filter((item) => {
      return item.name !== removeItem;
    });
    setCurrentSale([...newCart]);
  };

  const addToCart = (e) => {
    const itemID = Number(e.target.parentNode.id);
    const itemToCart = product.filter(function (item, index) {
      return index === itemID && !currentSale.includes(item);
    });
    setCurrentSale([...currentSale, ...itemToCart]);
  };

  const valorTotal = currentSale.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hamburgueria da Kenzie</h1>
        </div>
        <Form showProducts={showProducts} />
      </header>
      <section className="container">
        <div className="prodList">
          <MenuContainer product={product} addToCart={addToCart} />
        </div>
        <div className="carBox">
          <h3>Carrinho</h3>
          <Cart currentSale={currentSale} clickRemove={clickRemove} />
          <span className="total">Total: {valorTotal.toFixed(2)}R$</span>
          <button className="buy">Pagar</button>
        </div>
      </section>
    </div>
  );
}

export default App;
