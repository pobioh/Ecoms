"use client";
import React, { useState } from "react";
import HeaderPage from "../components/header/header";
import { Delete } from "@mui/icons-material";
import { useCart } from "./CartContext";
import Link from "next/link";
import Image from "next/image";
import HandleBack from "./BackButton";
import CouponHandler from "./CouponHandler";
import Wishlist from "./Wishlist";

export default function CartPreview() {
  const { cart, removeItem, updateQuantity } = useCart();
  const [discount, setDiscount] = useState(0);

  const handleRemoveItem = (index: number) => {
    if (removeItem) {
      removeItem(index);
    } else {
      console.error("removeItem is not defined in useCart");
    }
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    if (updateQuantity) {
      updateQuantity(index, quantity);
    } else {
      console.error("updateQuantity is not defined in useCart");
    }
  };

  const incrementQuantity = (index: number) => {
    const newQuantity = cart[index].quantity + 1;
    handleUpdateQuantity(index, newQuantity);
  };

  const decrementQuantity = (index: number) => {
    const newQuantity = cart[index].quantity > 1 ? cart[index].quantity - 1 : 1;
    handleUpdateQuantity(index, newQuantity);
  };

  const parsePrice = (priceString: string) => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
  };

  const cartSubtotal = cart.reduce((total, item) => {
    const itemPrice = parsePrice(item.price.toString());
    return total + (isNaN(itemPrice) ? 0 : itemPrice * item.quantity);
  }, 0);

  const vatRate = 0.0; // Adjust the VAT rate as needed
  const shippingFee = 15;
  const vatAmount = cartSubtotal * vatRate;
  const orderTotal = cartSubtotal + vatAmount + shippingFee - discount;

  const [activeTab, setActiveTab] = useState("shopping-cart");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="bg-dark-white">
        <div
          className="overlay-bg"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/25070769/pexels-photo-25070769/free-photo-of-smiling-balls-in-a-trolley.jpeg?auto=compress&cs=tinysrgb&w=600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="heading-banner">
                  <div className="heading-banner-title">
                    <h2>Shopping Cart</h2>
                  </div>
                  <div className="breadcumbs pb-15">
                    <ul>
                      <li>
                        <Link href="../">Home</Link>
                      </li>
                      <li>Shopping Cart</li>
                      <li>
                        <HandleBack />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shopping-cart-area pt-30 pb-10">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shopping-cart">
                  <ul className="cart-page-menu nav row clearfix mb-30">
                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        data-bs-toggle="tab"
                        className={
                          activeTab === "shopping-cart" ? "active" : ""
                        }
                        onClick={() => handleTabClick("shopping-cart")}
                      >
                        shopping cart
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        data-bs-toggle="tab"
                        className={activeTab === "wishlist" ? "active" : ""}
                        onClick={() => handleTabClick("wishlist")}
                      >
                        wishlist
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        data-bs-toggle="tab"
                        className={activeTab === "check-out" ? "active" : ""}
                        onClick={() => handleTabClick("check-out")}
                      >
                        check out
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        data-bs-toggle="tab"
                        className={
                          activeTab === "order-complete" ? "active" : ""
                        }
                        onClick={() => handleTabClick("order-complete")}
                      >
                        order complete
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div
                      className={`tab-pane ${
                        activeTab === "shopping-cart" ? "active" : ""
                      }`}
                      id="shopping-cart"
                    >
                      <form action="#">
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
                                    const numericPrice = parsePrice(
                                      item.price.toString()
                                    );
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
                                                <Link
                                                  className="text-light-black"
                                                  href="#"
                                                >
                                                  {item.title}
                                                </Link>
                                              </h4>
                                              <p className="mb-0">
                                                Color: {item.color}
                                              </p>
                                              <p className="mb-0">
                                                Size: {item.size}
                                              </p>
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
                                              onClick={() =>
                                                decrementQuantity(index)
                                              }
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
                                              onClick={() =>
                                                incrementQuantity(index)
                                              }
                                            >
                                              +
                                            </div>
                                          </div>
                                        </td>
                                        <td className="product-subtotal">
                                          ${total.toFixed(2)}
                                        </td>
                                        <td className="product-remove">
                                          <Link
                                            href="#"
                                            onClick={() =>
                                              handleRemoveItem(index)
                                            }
                                          >
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
                        <div className="row">
                          <div className="col-md-6">
                            <CouponHandler
                              cartSubtotal={cartSubtotal}
                              setDiscount={setDiscount}
                            />
                          </div>
                          <div className="col-md-6">
                            <div className="customer-login payment-details mt-30">
                              <h4 className="title-1 title-border text-uppercase">
                                Payment Details
                              </h4>
                              <table>
                                <tbody>
                                  <tr>
                                    <td className="text-left">Cart Subtotal</td>
                                    <td className="text-end">
                                      ${cartSubtotal.toFixed(2)}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-left">Shipping</td>
                                    <td className="text-end">$15.00</td>
                                  </tr>
                                  <tr>
                                    <td className="text-left">VAT</td>
                                    <td className="text-end">
                                      ${vatAmount.toFixed(2)}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-left">Discount</td>
                                    <td className="text-end">
                                      ${discount.toFixed(2)}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-left">Order Total</td>
                                    <td className="text-end">
                                      ${orderTotal.toFixed(2)}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className={`tab-pane ${
                        activeTab === "wishlist" ? "active" : ""
                      }`}
                      id="wishlist"
                    >
                      <Wishlist />
                    </div>
                    <div
                      className={`tab-pane ${
                        activeTab === "check-out" ? "active" : ""
                      }`}
                      id="check-out"
                    >
                      {/* Add check-out content here */}
                    </div>
                    <div
                      className={`tab-pane ${
                        activeTab === "order-complete" ? "active" : ""
                      }`}
                      id="order-complete"
                    >
                      {/* Add order-complete content here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
