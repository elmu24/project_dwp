import React from 'react';

function OrderForm({ productName, productPrice, selectedIndex, onProductChange, quantity, onQuantityChange }) {
  return (
    <div>
      <h2>Select product</h2>

      <hr />
      
      <div className="selection-container">
        <p>Product:</p>
        <select value={selectedIndex} onChange={(e) => onProductChange(Number(e.target.value))}>
          {productName.map((name, index) => (
            <option key={index} value={index}>
              {name} ({productPrice[index]}€)
            </option>
          ))}
        </select>
      </div>

      <div className="selection-container">
        <p>Quantity:</p>
        <div className="quantity-container">
          <button onClick={() => onQuantityChange(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onQuantityChange(quantity + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
