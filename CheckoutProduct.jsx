import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../Stateprovider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  //   function removeFromBasket() {
  //     //    Remove the item from basket.
  //     dispatch({
  //       type: "REMOVE_FROM_BASKET",
  //       id: id,
  //     });
  //   }

  const removeFromBasket = () =>
    //   console.log(id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  return (
    <div className="checkoutProduct">
      <img className="CP__image" src={image}></img>

      <div className="CP__info">
        <p className="CP__title">{title}</p>
        <p className="CP__price">
          <small>$</small>
          <strong>{price}</strong>
          <div className="CP__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
        </p>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
