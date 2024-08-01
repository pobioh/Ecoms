"use client";
import React, { useState } from 'react';
import { ShoppingBasketRounded, ShoppingCart } from '@mui/icons-material';
import { useCart } from './CartContext'; // Adjust the path accordingly

interface ProductProps {
  imgSrc: string;
  title: string;
  price: string;
  rating: number;
  quantity: number;
  label?: 'new' | 'sale';
}

const AddToCartBtn: React.FC<ProductProps> = ({
  imgSrc,
  title,
  price,
  quantity,
  rating,
  label,
}) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const parsePrice = (priceString: string | number) => {
    const priceStr = typeof priceString === 'number' ? priceString.toString() : priceString;
    return parseFloat(priceStr.replace(/[^0-9.-]+/g, ''));
  };

  const handleAddToCart = () => {
    const numericPrice = parsePrice(price);
    addToCart({
      imgSrc,
      title,
      price: numericPrice,
      quantity: 1,
      color: undefined,
      size: undefined,
    });
    setIsAdded(true);
  };

  return (
    <a
      onClick={handleAddToCart}
      data-bs-toggle="tooltip"
      data-placement="top"
      title="Add To Cart"
    >
      {isAdded ? <ShoppingBasketRounded /> : <ShoppingCart />}
    </a>
  );
};

export default AddToCartBtn;
