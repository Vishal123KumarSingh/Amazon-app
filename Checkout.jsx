import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import { useStateValue } from "../Stateprovider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="add__image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQxxpANWQmYgfcQp3CqxBHneE-5vYfOzpdA&usqp=CAU"
        ></img>
        <div>
          {/* if here , we will use only user.email inspite of user?.email, then checkout page will not be seen , when user is not logged in */}
          <h3> Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket.</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
