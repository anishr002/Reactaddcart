import { type } from "@testing-library/user-event/dist/type";
import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({id, title,type,description,filename,price,rating }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={filename} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <h3>type : {type}</h3>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={rating} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
