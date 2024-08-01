import { ShoppingCart } from "@mui/icons-material";
import { useCart } from "../../app/components/CartContext"; // Adjust the path accordingly

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

  const parsePrice = (priceString: string | number) => {
    const priceStr =
      typeof priceString === "number" ? priceString.toString() : priceString;
    return parseFloat(priceStr.replace(/[^0-9.-]+/g, ""));
  };

  const handleAddToCart = () => {
    const numericPrice = parsePrice(price);
    addToCart({
      imgSrc,
      title,
      price: numericPrice,
      quantity: 1,
      color: undefined,
      size: undefined,
    });
  };

  return (
    <a
      onClick={handleAddToCart}
      data-bs-toggle="tooltip"
      data-placement="top"
      title="Add To Cart"
    >
      <ShoppingCart />
    </a>
  );
};

export default AddToCartBtn;