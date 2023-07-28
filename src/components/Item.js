import React from "react";

function Item({ name, category }) {
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"> onClick={() => setItem("in-cart")}>
				{item ? "Remove from Cart" : "Add to Cart"}
        </button>
    </li>
  );
}

export default Item;
