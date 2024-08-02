"use client";
import { useState, useEffect } from "react";

interface CouponHandlerProps {
  cartSubtotal: number;
  setDiscount: (discount: number) => void;
}

export default function CouponHandler({
  cartSubtotal,
  setDiscount,
}: CouponHandlerProps) {
  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const [isCouponValid, setIsCouponValid] = useState<boolean | null>(null);

  useEffect(() => {
    const storedCouponCode = localStorage.getItem("couponCode");
    const storedDiscount = localStorage.getItem("discount");

    if (storedCouponCode) {
      setCouponCode(storedCouponCode);
    }

    if (storedDiscount) {
      setDiscount(parseFloat(storedDiscount));
    }
  }, [setDiscount]);

  const handleApplyCoupon = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (couponCode === "DISCOUNT") {
      const discountAmount = cartSubtotal * 0.5;
      setDiscount(discountAmount);
      setCouponMessage("Coupon applied! 50% discount applied.");
      setIsCouponValid(true); // Set coupon validity to true
      // Save the coupon code and discount to localStorage
      localStorage.setItem("couponCode", couponCode);
      localStorage.setItem("discount", discountAmount.toString());
    } else {
      setDiscount(0);
      setCouponMessage("Invalid coupon code.");
      setIsCouponValid(false); // Set coupon validity to false
      // Clear the coupon code and discount from localStorage
      localStorage.removeItem("couponCode");
      localStorage.removeItem("discount");
    }
  };

  return (
    <div className="customer-login mt-30">
      <h4 className="title-1 title-border text-uppercase">coupon discount</h4>
      <p className="text-gray">Enter your coupon code if you have one!</p>
      <input
        type="text"
        placeholder="Enter your code here."
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
      />
      <button
        onClick={handleApplyCoupon}
        data-text="apply coupon"
        className="button-one submit-button mt-15"
      >
        apply coupon
      </button>
      {couponMessage && (
        <p className="mt-4" style={{ color: isCouponValid ? "green" : "red" }}>
          {couponMessage}
        </p>
      )}
    </div>
  );
}
