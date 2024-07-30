"use client";
import HeaderPage from "../components/header/header";
// import { useCart } from "./CartContext"; // Ensure this path is correct
import { Delete } from "@mui/icons-material";
import { useCart } from "./CartContext";
import Link from "next/link";

export default function CartPreview() {
  const { cart, removeItem, updateQuantity } = useCart();

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
  const orderTotal = cartSubtotal + vatAmount + shippingFee;
  return (
    <>
      <HeaderPage />
      <div className="bg-dark-white">
        <div className="heading-banner-area overlay-bg">
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
                        <Link href="index">Home</Link>
                      </li>
                      <li>Shopping Cart</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shopping-cart-area  pt-30 pb-10">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shopping-cart">
                  <ul className="cart-page-menu nav row clearfix mb-30">
                    <li>
                      <Link
                        className="active"
                        href="#shopping-cart"
                        data-bs-toggle="tab"
                      >
                        shopping cart
                      </Link>
                    </li>
                    <li>
                      <Link href="#wishlist" data-bs-toggle="tab">
                        wishlist
                      </Link>
                    </li>
                    <li>
                      <Link href="#check-out" data-bs-toggle="tab">
                        check out
                      </Link>
                    </li>
                    <li>
                      <Link href="#order-complete" data-bs-toggle="tab">
                        order complete
                      </Link>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane active" id="shopping-cart">
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
                                                <img
                                                  src={item.imgSrc}
                                                  alt={item.title}
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
                                            <button
                                              type="button"
                                              onClick={() =>
                                                decrementQuantity(index)
                                              }
                                              className="cart-minus"
                                            >
                                              -
                                            </button>
                                            <input
                                              type="number"
                                              value={item.quantity}
                                              min="1"
                                              readOnly
                                              className="cart-plus-minus-box"
                                            />
                                            <button
                                              type="button"
                                              onClick={() =>
                                                incrementQuantity(index)
                                              }
                                              className="cart-plus"
                                            >
                                              +
                                            </button>
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
                            <div className="customer-login mt-30">
                              <h4 className="title-1 title-border text-uppercase">
                                coupon discount
                              </h4>
                              <p className="text-gray">
                                Enter your coupon code if you have one!
                              </p>
                              <input
                                type="text"
                                placeholder="Enter your code here."
                              />
                              <button
                                type="submit"
                                data-text="apply coupon"
                                className="button-one submit-button mt-15"
                              >
                                apply coupon
                              </button>
                            </div>
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
