"use client";
import React, { useState } from "react";
import { useCart } from "./CartContext";
import Link from "next/link";
import HandleBack from "./BackButton";
import CouponHandler from "./CouponHandler";
import Wishlist from "./Wishlist";
import CartPreviewProducts from "./ShoppingCartTab";

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
                        <CartPreviewProducts
                          cart={[]}
                          incrementQuantity={function (index: number): void {
                            throw new Error("Function not implemented.");
                          }}
                          decrementQuantity={function (index: number): void {
                            throw new Error("Function not implemented.");
                          }}
                          handleRemoveItem={function (index: number): void {
                            throw new Error("Function not implemented.");
                          }}
                          cartSubtotal={0}
                          vatAmount={0}
                          orderTotal={0}
                          discount={0}
                          handleTabClick={function (tab: string): void {
                            throw new Error("Function not implemented.");
                          }}
                          setDiscount={function (discount: number): void {
                            throw new Error("Function not implemented.");
                          }}
                        />
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
                              <button
                                type="button"
                                onClick={() => handleTabClick("check-out")}
                                data-text="Checkout"
                                className="button-one submit-button mt-15"
                              >
                                Checkout
                              </button>
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
