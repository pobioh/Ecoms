// pages/products.tsx
import Product from "./products/page";

const products = [
  {
    imgSrc: "/img/product/1.jpg",
    title: "Chair",
    price: "$50.20",
    rating: 4.5,
    label: "new" as "new", // Cast to the specific type
  },
  {
    imgSrc: "/img/product/2.jpg",
    title: "dummy Product name",
    price: "$56.20",
    rating: 4.5,
    label: "sale" as "sale", // Cast to the specific type
  },
  {
    imgSrc: "/img/product/3.jpg",
    title: "Second Product",
    price: "$100.20",
    rating: 4.5,
  },
  {
    imgSrc: "/img/product/4.jpg",
    title: "3rd Prody",
    price: "$200.20",
    rating: 4.5,
  },
];

const TrendingPage: React.FC = () => {
  return (
    <div className="product-area pt-40 pb-35">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2 className="title-border">Trending Products</h2>
            </div>
            <div className="product-slider style-1 arrow-left-right">
              <div className="row">
                {products.map((product, index) => (
                  <Product
                    key={index}
                    imgSrc={product.imgSrc}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    label={product.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPage;
