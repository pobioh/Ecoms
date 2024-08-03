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
    const applyDiscount = localStorage.getItem("applyDiscount");

    if (storedCouponCode) {
      setCouponCode(storedCouponCode);
    }

    if (storedDiscount) {
      setDiscount(parseFloat(storedDiscount));
    }

    // Check if we need to automatically apply the discount
    if (applyDiscount === "true") {
      const discountAmount = cartSubtotal * 0.5;
      setDiscount(discountAmount);
      setCouponMessage("Automatic discount applied! 50% off.");
      setIsCouponValid(true);
      // Save the discount to localStorage
      localStorage.setItem("discount", discountAmount.toString());
    }
  }, [cartSubtotal, setDiscount]);

  const handleApplyCoupon = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (couponCode === "DISCOUNT") {
      const discountAmount = cartSubtotal * 0.5;
      setDiscount(discountAmount);
      setCouponMessage("Coupon applied! 50% discount applied.");
      setIsCouponValid(true);
      // Save the coupon code and discount to localStorage
      localStorage.setItem("couponCode", couponCode);
      localStorage.setItem("discount", discountAmount.toString());
      // Also set applyDiscount to true
      localStorage.setItem("applyDiscount", "true");
    } else {
      setDiscount(0);
      setCouponMessage("Invalid coupon code.");
      setIsCouponValid(false);
      // Clear the coupon code and discount from localStorage
      localStorage.removeItem("couponCode");
      localStorage.removeItem("discount");
      localStorage.removeItem("applyDiscount");
    }
  };

  return (
    <div className="customer-login mt-30">
      <h4 className="title-1 title-border text-uppercase">Coupon Discount</h4>
      <p className="text-gray">Enter your coupon code if you have one!</p>
      <input
        type="text"
        placeholder="Enter your code here."
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
      />
      <button
        onClick={handleApplyCoupon}
        data-text="Apply Coupon"
        className="button-one submit-button mt-15"
      >
        Apply Coupon
      </button>
      {couponMessage && (
        <p className="mt-4" style={{ color: isCouponValid ? "green" : "red" }}>
          {couponMessage}
        </p>
      )}
    </div>
  );
}
