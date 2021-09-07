import "./MenuContainerCss.css";
const MenuContainer = ({ product, addToCart }) => {
  return (
    <>
      {product.map((item, index) => (
        <div key={index} id={index} className="itemBox">
          <p className="name">{item.name}</p>
          <p>Categoria: {item.category}</p>
          <p className="price">Valor: {item.price} R$</p>
          <button className="addBtn" onClick={(e) => addToCart(e)}>
            Adcionar
          </button>
        </div>
      ))}
    </>
  );
};
export default MenuContainer;
