import React from "react";
import "./Item.scss";
const Item = ({ items }) => {
  return (
    <div className="Item">
      {items.map(item => (
        <div className="card" key={item.itemId}>
          <h4>{item.itemTitle}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Item;
