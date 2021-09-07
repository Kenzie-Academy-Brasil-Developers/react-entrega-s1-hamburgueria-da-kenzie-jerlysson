import "./CartCss.css";
const Cart = ({ currentSale, clickRemove }) => {
  return (
    <>
      {currentSale.map((item, index) => (
        <div key={index} id={index} className="cartBox">
          <p>{item.name}</p>
          <p>Valor: {item.price}</p>
          <button onClick={clickRemove}>Remover este</button>
        </div>
      ))}
    </>
  );
};
export default Cart;
