"use client";
import React, { useState } from "react";
import { ShoppingBasketRounded, ShoppingCart } from "@mui/icons-material";
import { useCart } from "./CartContext"; // Adjust the path accordingly
import { CircularProgress } from "@mui/material";

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
  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const parsePrice = (priceString: string | number) => {
    const priceStr =
      typeof priceString === "number" ? priceString.toString() : priceString;
    return parseFloat(priceStr.replace(/[^0-9.-]+/g, ""));
  };

  const handleAddToCart = () => {
    setIsLoading(true);
    const numericPrice = parsePrice(price);
    addToCart({
      imgSrc,
      title,
      price: numericPrice,
      quantity: 1, // Initialize quantity to 1, it will be managed in the provider
      color: undefined,
      size: undefined,
    });
    setIsAdded(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate loading time
  };

  return (
    <a
      onClick={handleAddToCart}
      data-bs-toggle="tooltip"
      data-placement="top"
      title="Add To Cart"
      style={{ position: "relative" }}
    >
      {isLoading ? (
        <CircularProgress style={{ fontSize: "20px" }} /> // Replace with your preloader component
      ) : isAdded ? (
        <ShoppingBasketRounded />
      ) : (
        <ShoppingCart />
      )}
    </a>
  );
};

export default AddToCartBtn;
