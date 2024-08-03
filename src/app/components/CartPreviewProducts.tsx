"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Delete } from "@mui/icons-material";
import { useCart } from "./CartContext";

const ProductList = ({
  handleRemoveItem,
  incrementQuantity,
  decrementQuantity,
  parsePrice,
}) => {
  const { cart } = useCart();

  return (
    <div className="shop-cart-table">
      <div className="table-content table-responsive">
        <table>
          <thead>
            <tr>
              <th className="product-thumbnail">Product</th>
              <th className="product-price">Price</th>
              <th className="product-quantity">Quantity</th>
              <th className="product-subtotal">Total</th>
              <th className="product-remove">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center">
                  No items in cart
                </td>
              </tr>
            ) : (
              cart.map((item, index) => {
                const numericPrice = parsePrice(item.price.toString());
                const total = numericPrice * item.quantity;

                return (
                  <tr key={index}>
                    <td className="product-thumbnail text-left">
                      <div className="single-product">
                        <div className="product-img">
                          <Link href="#">
                            <Image
                              src={item.imgSrc}
                              alt={item.title}
                              layout="responsive"
                              width={500}
                              height={300}
                            />
                          </Link>
                        </div>
                        <div className="product-info">
                          <h4 className="post-title">
                            <Link className="text-light-black" href="#">
                              {item.title}
                            </Link>
                          </h4>
                          <p className="mb-0">Color: {item.color}</p>
                          <p className="mb-0">Size: {item.size}</p>
                        </div>
                      </div>
                    </td>
                    <td className="product-price">
                      ${numericPrice.toFixed(2)}
                    </td>
                    <td className="product-quantity">
                      <div className="cart-plus-minus">
                        <div
                          className="dec qtybutton"
                          onClick={() => decrementQuantity(index)}
                        >
                          -
                        </div>
                        <input
                          type="text"
                          value={item.quantity}
                          name="qtybutton"
                          className="cart-plus-minus-box"
                          readOnly
                        />
                        <div
                          className="inc qtybutton"
                          onClick={() => incrementQuantity(index)}
                        >
                          +
                        </div>
                      </div>
                    </td>
                    <td className="product-subtotal">${total.toFixed(2)}</td>
                    <td className="product-remove">
                      <Link href="#" onClick={() => handleRemoveItem(index)}>
                        <Delete className="relative rounded-full bg-red-800 p-1 text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
