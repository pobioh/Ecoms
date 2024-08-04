import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Delete } from "@mui/icons-material";
import { CartItem } from "./types"; // Correct import
import CouponHandler from "./CouponHandler";
import PreloaderTable from "./Preloader";

interface ShoppingCartProps {
  cart: CartItem[];
  incrementQuantity: (index: number) => void;
  decrementQuantity: (index: number) => void;
  handleRemoveItem: (index: number) => void;
  cartSubtotal: number;
  vatAmount: number;
  orderTotal: number;
  discount: number;
  handleTabClick: (tab: string) => void;
  setDiscount: (discount: number) => void;
}

export default function ShoppingCart({
  cart,
  incrementQuantity,
  decrementQuantity,
  handleRemoveItem,
  cartSubtotal,
  vatAmount,
  orderTotal,
  discount,
  handleTabClick,
  setDiscount,
}: ShoppingCartProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a fetch or some processing delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const parsePrice = (priceString: string) =>
    parseFloat(priceString.replace(/[^0-9.-]+/g, ""));

  if (loading) {
    return <PreloaderTable />;
  }

  return (
    <>
      <form action="#">
        <div className="shop-cart-table" id="shoppingTab">
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
                        <td className="product-subtotal">
                          ${total.toFixed(2)}
                        </td>
                        <td className="product-remove">
                          <Link
                            href="#"
                            onClick={() => handleRemoveItem(index)}
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
          {cart.length > 0 && (
            <>
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
                        <td className="text-end">${cartSubtotal.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td className="text-left">Shipping</td>
                        <td className="text-end">$15.00</td>
                      </tr>
                      <tr>
                        <td className="text-left">VAT</td>
                        <td className="text-end">${vatAmount.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td className="text-left">Discount</td>
                        <td className="text-end">${discount.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td className="text-left">Order Total</td>
                        <td className="text-end">${orderTotal.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                  <a
                    href="#shoppingTab"
                    onClick={() => handleTabClick("check-out")}
                    data-text="Checkout"
                    className="button-one submit-button mt-15"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </form>
    </>
  );
}
