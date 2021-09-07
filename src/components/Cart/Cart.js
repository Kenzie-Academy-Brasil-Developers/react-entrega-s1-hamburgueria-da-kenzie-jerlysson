import "./CartCss.css";
const Cart = ({ currentSale, clickRemove }) => {
  return (
    <>
      {currentSale.map((item, index) => (
        <div key={index} id={index} className="cartBox">
          <p className="CartName">{item.name}</p>
          <p>Valor: {item.price}</p>
          <button className="cartBtn" onClick={clickRemove}>
            Remover
          </button>
        </div>
      ))}
    </>
  );
};
export default Cart;
