import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  const uniqueBasketItems = [
    ...new Map(basket.map((item) => [item["id"], item])).values(),
  ];
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="ad"
            className="checkout__ad"
          />
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Shopping Cart</h2>

          {/* Checkout items container */}
          <div className="checkout__itemsContainer">
            {uniqueBasketItems.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                price={item.price}
                rating={item.rating}
                title={item.title}
              />
            ))}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
