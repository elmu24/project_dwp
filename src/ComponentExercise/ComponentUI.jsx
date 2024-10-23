import React, { useState } from 'react';
import Header from './Header';
import OrderForm from './OrderForm';
import OrderInfo from './OrderInfo';


// Arrays for product names and prices
const productName = ["AMD Ryzen 5 3600", "AMD Ryzen 5 3500", "AMD Ryzen 3 3300"];
const productPrice = [245, 215, 195];

function ComponentUI() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (index) => {
    setSelectedIndex(index);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="content">
      <Header title="WELCOME PRODUCT PAGE!" image="https://picsum.photos/100" altText="some random picture" />
      <OrderForm 
        productName={productName}
        productPrice={productPrice}
        selectedIndex={selectedIndex}
        onProductChange={handleProductChange}
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
      />
      <OrderInfo 
        productName={productName}
        productPrice={productPrice}
        selectedIndex={selectedIndex}
        quantity={quantity}
      />
    </div>
  );
}

export default ComponentUI;