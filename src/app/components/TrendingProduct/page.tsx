// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   FavoriteBorder,
//   ShoppingCart,
//   Star,
//   StarHalf,
//   Visibility,
// } from "@mui/icons-material";
// import { useCart } from "../CartContext"; // Adjust the path accordingly

// // Define the ProductProps interface
// interface ProductProps {
//   imgSrc: string;
//   title: string;
//   price: string;
//   rating: number;
//   label?: "new" | "sale";
// }

// const Product: React.FC<ProductProps> = ({
//   imgSrc,
//   title,
//   price,
//   rating,
//   label,
// }) => {
//   const { addToCart } = useCart();

//   // Function to convert price string to number
//   const parsePrice = (priceString: string) => {
//     // Remove dollar sign and convert to float
//     return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
//   };

//   const handleAddToCart = () => {
//     const numericPrice = parsePrice(price);
//     addToCart({
//       imgSrc,
//       title,
//       price: numericPrice,
//       quantity: 1,
//       color: undefined,
//       size: undefined,
//     });
//   };

//   return (
//     <div className="col-lg-3 col-md-4 col-sm-6">
//       <div className="single-product">
//         <div className="product-img">
//           {label && <span className={`pro-label ${label}-label`}>{label}</span>}

//           <Image src={imgSrc} alt={title} width={300} height={300} />

//           <div className="product-action clearfix">
//             <a
//               href="wishlist.html"
//               data-bs-toggle="tooltip"
//               data-placement="top"
//               title="Wishlist"
//             >
//               <FavoriteBorder />
//             </a>
//             <Link href="/Products/1" title="Quick View">
//               <Visibility />
//             </Link>
//             <a
//               style={{ cursor: "pointer" }}
//               onClick={handleAddToCart}
//               data-bs-toggle="tooltip"
//               data-placement="top"
//               title="Add To Cart"
//             >
//               <ShoppingCart />
//             </a>
//           </div>
//         </div>
//         <div className="product-info clearfix">
//           <div className="fix">
//             <h4 className="post-title floatleft">
//               <Link href="#">{title}</Link>
//             </h4>
//             <p className="floatright hidden-sm d-none d-md-block">Furniture</p>
//           </div>
//           <div className="fix">
//             <span className="pro-price floatleft">{price}</span>
//             <span className="pro-rating floatright">
//               {[...Array(5)].map((_, i) => {
//                 if (i < rating) {
//                   return <Star key={i} />;
//                 } else if (i === Math.floor(rating) && rating % 1 !== 0) {
//                   return <StarHalf key={i} />;
//                 }
//                 return null;
//               })}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
