import React from 'react';

function OrderInfo({ productName, productPrice, selectedIndex, quantity }) {
  const total = productPrice[selectedIndex] * quantity;

  return (
    <div>
      <h2>Order Info</h2>

      <hr />

      <table>
        
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{productName[selectedIndex]}</td>
            <td>{quantity}</td>
            <td>{total}€</td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}

export default OrderInfo;