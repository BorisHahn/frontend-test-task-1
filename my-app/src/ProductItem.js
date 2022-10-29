import "./ProductItem.css";
import inStock from "./img/inStock.png";
import onOrder from "./img/onOrder.png";

const ProductItem = (product) => {
  const { availability, color, id, image_url, name, price, short_desc } =
    product.item;
const statusIcon = availability ? inStock : onOrder;
  return (
    <div className="item" key={id}>
      <div className="item__image-wrapper">
      <img src={image_url} className="item__image" alt="Изображение товара" />
      </div>
      <img src={statusIcon} className="item__status" alt="Статус товара" />
      <p className="item__title">{name}</p>
      <p className="item__price">{price}</p>
      <p className="item__color">Цвет - {color}</p>
      <span className="item__description">{short_desc}</span>
      <button className="item__button">В КОРЗИНУ</button>
    </div>
  );
};

export default ProductItem;
