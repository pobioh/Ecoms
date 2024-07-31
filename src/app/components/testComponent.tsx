"use client";
import { ShoppingCart } from "@mui/icons-material";
import React, { useState, useRef } from "react";

import { useCart } from "../../app/components/CartContext"; // Adjust the path accordingly

interface ProductProps {
  imgSrc: string;
  title: string;
  price: string;
  rating: number;
  label?: "new" | "sale";
}

const AddToCartBtn: React.FC<ProductProps> = ({
  imgSrc,
  title,
  price,
  rating,
  label,
}) => {
  const { addToCart } = useCart();

  // Function to convert price string to number
  const parsePrice = (priceString: string | number) => {
    // Ensure the priceString is a string
    const priceStr = typeof priceString === 'number' ? priceString.toString() : priceString;
    
    // Remove dollar sign and convert to float
    return parseFloat(priceStr.replace(/[^0-9.-]+/g, ""));
  };
  
  const handleAddToCart = () => {
    const numericPrice = parsePrice(price);
    addToCart({
      imgSrc, title, price: numericPrice, quantity: 1,
      color: undefined,
      size: undefined
    });
  };
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const positionRef = useRef(position);
  positionRef.current = position;

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;
      requestAnimationFrame(() => {
        setPosition({ x: newX, y: newY });
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: dragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <span data-bs-toggle="tooltip"  onClick={handleAddToCart}  data-placement="top" title="Add To Cart">
        <ShoppingCart />
      </span>
    </div>
  );
};

export default DraggableButton;
