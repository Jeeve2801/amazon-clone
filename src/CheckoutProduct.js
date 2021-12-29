import React from "react";
import "./CheckoutProduct.css";
import { MdStarRate } from "react-icons/md";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, rating, price, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const decrementItemQty = () => {
    dispatch({
      type: "DECREMENT_FROM_BASKET",
      id: id,
    });
  };

  const incrementItemQty = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="product" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>&#8377;</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <MdStarRate className="checkoutProduct__ratingStar" />
              </p>
            ))}
        </div>
        {!hideButton && (
          <div className="checkoutProduct__removeItem">
            <button onClick={decrementItemQty}>-</button>
            <p className="checkoutProduct__Qty">
              {basket.filter((item) => item.id === id).length}
            </p>
            <button onClick={incrementItemQty}>+</button>
            <p className="checkoutProduct__removeItemSeperator">|</p>
            <button onClick={removeFromBasket}>Remove from Cart</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
