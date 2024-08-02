// // pages/products.tsx

import TrendingProduct from "./TrendingProduct";

const products = [
  {
    id: "1",
    imgSrc: "/img/product/1.jpg",
    title: "Chair",
    price: 50.2,
    rating: 4.5,
    quantity: 8,
    label: "new" as "new", // Cast to the specific type
  },
  {
    id: "2",
    imgSrc: "/img/product/2.jpg",
    title: "dummy Product name",
    price: 56.2,
    rating: 4.5,
    quantity: 4,
    label: "sale" as "sale", // Cast to the specific type
  },
  {
    id: "3",
    imgSrc: "/img/product/3.jpg",
    title: "Second Product",
    price: 100.2,
    rating: 4.5,
    quantity: 2,
  },
  {
    id: "4",
    imgSrc: "/img/product/4.jpg",
    title: "3rd Prody",
    price: 200.2,
    rating: 4.5,
    quantity: 6,
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
                  <TrendingProduct
                    key={index}
                    imgSrc={product.imgSrc}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    label={product.label}
                    id={product.id}
                    quantity={product.quantity}
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
