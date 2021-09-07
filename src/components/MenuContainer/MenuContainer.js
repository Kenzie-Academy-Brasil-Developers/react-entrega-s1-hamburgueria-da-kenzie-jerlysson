import "./MenuContainerCss.css";
const MenuContainer = ({ product, addToCart }) => {
  return (
    <>
      {product.map((item, index) => (
        <div key={index} id={index} className="itemBox">
          <p>{item.name}</p>
          <p>Categoria: {item.category}</p>
          <p>Valor: {item.price} R$</p>
          <button onClick={(e) => addToCart(e)}>Adcionar</button>
        </div>
      ))}
    </>
  );
};
export default MenuContainer;
