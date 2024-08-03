"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Close, Delete } from "@mui/icons-material";
import AddToCartBtn from "./CartIcon";

interface WishlistItem {
  rating: number;
  productId: number;
  title: string;
  price: string;
  imgSrc: string;
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    // Load wishlist items from local storage
    const storedWishlist: WishlistItem[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("wishlist_")) {
        const item = JSON.parse(localStorage.getItem(key) || "{}");
        storedWishlist.push(item);
      }
    }
    setWishlist(storedWishlist);
  }, []);

  const handleRemoveFromWishlist = (productId: number) => {
    localStorage.removeItem(`wishlist_${productId}`);
    setWishlist(wishlist.filter((item) => item.productId !== productId));
  };

  return (
    <div className="wishlist-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shop-cart-table">
              <div className="table-content table-responsive">
                <div className="wishlist-content">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-cart">Add to cart</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlist.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="text-center">
                            No items in wishlist
                          </td>
                        </tr>
                      ) : (
                        wishlist.map((item, index) => (
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
                                </div>
                              </div>
                            </td>
                            <td className="product-price">${item.price}</td>
                            <td className="product-cart">
                              <AddToCartBtn
                                imgSrc={item.imgSrc}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                              />
                            </td>
                            <td className="product-remove">
                              <Link
                                href="#"
                                onClick={() =>
                                  handleRemoveFromWishlist(item.productId)
                                }
                              >
                                <Close className="relative rounded-full bg-red-800 p-1 text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
                              </Link>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
