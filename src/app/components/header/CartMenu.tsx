// CartMenu.tsx

import React from "react";
import { Menu } from "@headlessui/react";
import { ShoppingCart, Delete } from "@mui/icons-material";
import { Alert } from "@mui/material";
import { useCart } from "../CartContext"; // Ensure this path is correct
import Link from "next/link";

export default function CartMenu() {
  const { cart, removeItem } = useCart();

  const handleRemoveItem = (index: number) => {
    if (removeItem) {
      removeItem(index);
    } else {
      console.error("removeItem is not defined in useCart");
    }
  };

  const parsePrice = (priceString: string) => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
  };

  return (
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {cart.length === 0 ? (
            <div className="block px-4 py-2 text-sm text-gray-700">
              No items in cart
            </div>
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

                  return (
                    <div key={index} className="flex items-center mb-2">
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="h-12 w-12 mr-2 rounded"
                      />
                      <div className="flex-1">
                        <h5 className="text-sm font-semibold">{item.title}</h5>
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
      <div>
        <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
