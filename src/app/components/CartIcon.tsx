import { ShoppingCart } from "@mui/icons-material";
import { useCart } from "../../app/components/CartContext"; // Adjust the path accordingly
import cart from "../../app/components/CartIcon";


interface ProductProps {
    imgSrc: string;
    title: string;
    price: string;
    rating: number;
    label?: "new" | "sale";
  }
  
  const AddToCartBtn: React.FC<ProductProps> = ({
    imgSrc,
    title,
    price,
    rating,
    label,
  }) => {
    const { addToCart } = useCart();
  
    // Function to convert price string to number
    const parsePrice = (priceString: string) => {
      // Remove dollar sign and convert to float
      return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
    };
    const handleAddToCart = () => {
        const numericPrice = parsePrice(price);
        addToCart({ imgSrc, title, price: numericPrice, quantity: 1 });
      };
  return (
    <>
      <a
        href="#"
        onClick={handleAddToCart}
        data-bs-toggle="tooltip"
        data-placement="top"
        title="Add To Cart"
      >
        <ShoppingCart />
      </a>
    </>
  );
}

export default AddToCartBtn;