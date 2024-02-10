import React from "react";
import { useState } from "react";

function PlantCard({name, image, price}) {
const [stockButton, setStockButton] = useState(true);
const handleStockButton = () => {
  setStockButton(stockButton === true ? false : true)
}



  return (
    <>
        <li className="card" data-testid="plant-item">
          <img src={image} alt={name} />
          <h4>{name}</h4>
          <p>Price: {price}</p>
          {stockButton ? (
            <button className="primary" onClick={handleStockButton}>In Stock</button>
          ) : (
            <button onClick={handleStockButton}>Out of Stock</button>
          )}
        </li>
    </>
  );
}
export default PlantCard;
