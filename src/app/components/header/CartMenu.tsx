"use client";
import React, { useRef, useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { ShoppingCart, Delete } from "@mui/icons-material";
import { Alert } from "@mui/material";
import { useCart } from "../CartContext"; // Ensure this path is correct
import Link from "next/link";
import Image from "next/image";

export default function CartMenu() {
  const { cart, removeItem } = useCart();

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const positionRef = useRef(position);
  positionRef.current = position;

  useEffect(() => {
    // Load position from localStorage when component mounts
    try {
      const savedPosition = localStorage.getItem("cartMenuPosition");
      if (savedPosition) {
        setPosition(JSON.parse(savedPosition));
      }
    } catch (error) {
      console.error("Failed to load position from localStorage", error);
    }
  }, []);

  useEffect(() => {
    // Save position to localStorage whenever it changes
    try {
      localStorage.setItem("cartMenuPosition", JSON.stringify(position));
    } catch (error) {
      console.error("Failed to save position to localStorage", error);
    }
  }, [position]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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

  function parsePrice(arg0: string) {
    throw new Error("Function not implemented.");
  }

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
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View cart items</span>
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center h-6 w-6 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {cart.length}
                </span>
              )}
            </Menu.Button>
          </div>
          <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-96 overflow-auto">
            {cart.length === 0 ? (
              <Alert
                severity="info"
                className="block px-4 py-2 text-sm text-gray-700"
              >
                No items in cart
              </Alert>
            ) : (
              <>
                <div className="text-sm text-gray-700">
                  <Alert severity="success">
                    <p className="mb-0">
                      You have <span>{cart.length} items</span> in your shopping
                      bag
                    </p>
                  </Alert>
                </div>
                <div className="px-4 py-2">
                  {cart.map((item, index) => {
                    const numericPrice = parsePrice(item.price.toString());

                    function handleRemoveItem(index: number): void {
                      throw new Error("Function not implemented.");
                    }

                    return (
                      <div key={index} className="flex items-center mb-2">
                        <Image
                          src={item.imgSrc}
                          alt={item.title}
                          className="h-12 w-12 mr-2 rounded"
                          width={500}
                          height={300}
                        />
                        <div className="flex-1">
                          <h5 className="text-sm font-semibold">
                            {item.title}
                          </h5>
                          <p className="text-xs">
                            Price: $
                            {isNaN(numericPrice)
                              ? "0.00"
                              : numericPrice.toFixed(2)}
                          </p>
                          <p className="text-xs">Qty: {item.quantity}</p>
                        </div>
                        <span
                          className="text-red-600 cursor-pointer ml-2"
                          onClick={() => handleRemoveItem(index)}
                        >
                          <Delete />
                        </span>
                      </div>
                    );
                  })}
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <h5 className="text-sm font-semibold mb-2">
                      Total{" "}
                      <span className="float-right">
                        $
                        {cart
                          .reduce((total, item) => {
                            const itemPrice = parsePrice(item.price.toString());
                            return (
                              total +
                              (isNaN(itemPrice) ? 0 : itemPrice * item.quantity)
                            );
                          }, 0)
                          .toFixed(2)}
                      </span>
                    </h5>
                  </div>
                  <div className="flex justify-between mt-2">
                    <Link
                      href="/Cart"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      View Cart
                    </Link>
                    <Link
                      href="/Checkout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </>
            )}
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}
