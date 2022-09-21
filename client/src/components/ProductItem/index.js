import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"

function CardItem(item) {
  const {
    image,
    name,
    _id,
    linkedIn,
    facebook
  } = item;

  return (
    <div className="card px-1 py-1">
      <Link to={`/cards/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{facebook} {pluralize("item", facebook)} in stock</div>
        <span>${linkedIn}</span>
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default CardItem;
