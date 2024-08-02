import React, { useState, useEffect } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

interface WishlistIconProps {
  productId: number;
  title: string;
  price: string;
  imgSrc: string;
  isInWishlist: boolean;
  onToggleWishlist: (productId: number) => void;
}

const WishlistIcon: React.FC<WishlistIconProps> = ({
  productId,
  title,
  price,
  imgSrc,
  isInWishlist,
  onToggleWishlist,
}) => {
  const [wishlist, setWishlist] = useState<boolean>(isInWishlist);

  useEffect(() => {
    // Check local storage for the initial state
    const storedWishlist = localStorage.getItem(`wishlist_${productId}`);
    if (storedWishlist !== null) {
      setWishlist(JSON.parse(storedWishlist));
    } else {
      setWishlist(isInWishlist);
    }
  }, [productId, isInWishlist]);

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const newWishlistState = !wishlist;
    setWishlist(newWishlistState);
    if (newWishlistState) {
      // Store product details in local storage
      const productDetails = { productId, title, price, imgSrc };
      localStorage.setItem(
        `wishlist_${productId}`,
        JSON.stringify(productDetails)
      );
    } else {
      // Remove product from local storage
      localStorage.removeItem(`wishlist_${productId}`);
    }
    onToggleWishlist(productId);
  };

  return (
    <a
      href="#"
      onClick={handleToggleWishlist}
      data-bs-toggle="tooltip"
      data-placement="top"
      title="Wishlist"
    >
      {wishlist ? <Favorite style={{ color: "gold" }} /> : <FavoriteBorder />}
    </a>
  );
};

export default WishlistIcon;
