import React, { useState, useEffect } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

interface WishlistIconProps {
  productId: number;
  isInWishlist: boolean;
  onToggleWishlist: (productId: number) => void;
}

const WishlistIcon: React.FC<WishlistIconProps> = ({
  productId,
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
    localStorage.setItem(
      `wishlist_${productId}`,
      JSON.stringify(newWishlistState)
    );
    onToggleWishlist(productId);
  };

  return (
    <a
      style={{ cursor: "pointer" }}
      onClick={handleToggleWishlist}
      data-bs-toggle="tooltip"
      data-placement="top"
      title="Wishlist"
    >
      {wishlist ? <Favorite /> : <FavoriteBorder />}
    </a>
  );
};

export default WishlistIcon;
