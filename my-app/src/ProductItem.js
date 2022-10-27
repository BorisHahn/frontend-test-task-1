import "./ProductItem.css";
import logo from "./img/logo.png";

const ProductItem = () => {
  return (
    <div className="item">
      <img src="http://testtask.alto.codes/img/test-product.jpeg" className="item__image" alt="Изображение товара" />
      <img src={logo} className="item__status" alt="Статус товара" />
      <p className="item__title">Наименование товара 1</p>
      <p className="item__price">1000 ₽</p>
      <p className="item__color">Цвет - Тифани</p>
      <span className="item__description">Краткое описание товара</span>
      <button className="item__button">В КОРЗИНУ</button>
    </div>
  )
}

export default ProductItem;