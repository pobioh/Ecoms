import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Apps, FavoriteBorder, SearchOff, ViewList } from "@mui/icons-material";
import PriceRange from "./PriceRange";
import Pagination from "./Pagination"; // Import the new Pagination component
import Link from "next/link";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AddToCartBtn from "./CartIcon";
import Image from "next/image";

const ProductPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState<number[]>([10, 5000]);
  const router = useRouter(); // Use useRouter here

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const productsPerPage = 5;

  const filteredProducts = products.filter((product) => {
    const price = parseFloat(product.price);
    return price >= priceRange[0] && price <= priceRange[1];
  });

  const totalResults = filteredProducts.length;
  const totalPages = Math.ceil(totalResults / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleProductClick = (productId: number) => {
    router.push(`/Products/${productId}`);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<StarRateIcon key={i} />);
      } else {
        stars.push(<StarOutlineIcon key={i} />);
      }
    }
    return stars;
  };

  return (
    <>
      <PriceRange onChange={setPriceRange} />
      <div>
        <div className="product-option mb-30 clearfix">
          <ul className="nav d-block shop-tab">
            <li>
              <button
                className={`btn ${view === "grid" ? "active" : ""}`}
                onClick={() => setView("grid")}
              >
                <Apps />
              </button>
            </li>
            <li>
              <button
                className={`btn ${view === "list" ? "active" : ""}`}
                onClick={() => setView("list")}
              >
                <ViewList />
              </button>
            </li>
          </ul>
          <div className="showing text-end d-none d-md-block">
            <p className="mb-0">
              Showing {indexOfFirstProduct + 1}-
              {Math.min(indexOfLastProduct, totalResults)} of {totalResults}{" "}
              Results
            </p>
          </div>
        </div>
        <div className="tab-content">
          {view === "grid" ? (
            <div className="tab-pane active" id="grid-view">
              <div className="row">
                {currentProducts.map((product) => (
                  <div key={product.id} className="col-lg-4 col-md-6">
                    <div
                      className="single-product"
                      onClick={() => handleProductClick(product.id)}
                    >
                      <div className="product-img">
                        <span className={`pro-label ${product.label}-label`}>
                          {product.label}
                        </span>
                        <span className="pro-price-2">${product.price}</span>
                        <Link
                          href="Products"
                          onClick={() => handleProductClick(product.id)}
                        >
                          <Image
                            src={product.imgSrc}
                            alt={product.name}
                            layout="responsive"
                            width={500}
                            height={300}
                          />
                        </Link>
                      </div>
                      <div className="product-info clearfix text-center">
                        <div className="fix">
                          <h4 className="post-title">
                            <a href="#">{product.name}</a>
                          </h4>
                        </div>
                        <div className="fix">
                          <span className="pro-rating">
                            {renderStars(product.rating)}
                            <span>({product.rating} Rating)</span>
                          </span>
                        </div>
                        <div className="product-action clearfix">
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Wishlist"
                          >
                            <FavoriteBorder />
                          </a>
                          <a
                            href={`Products/${product.id}`}
                            data-bs-toggle="modal"
                            data-bs-target="#productModal"
                            title="Quick View"
                          >
                            <SearchOff />
                          </a>
                          <a className="pl-8" title="Quick View">
                            <AddToCartBtn
                              imgSrc={product.imgSrc}
                              title={product.name}
                              price={product.price.toString()} // Ensure price is a string
                              rating={product.rating}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="tab-pane active" id="list-view">
              {currentProducts.map((product) => (
                <div key={product.id} className="single-product list-view">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="product-img">
                        <span className={`pro-label ${product.label}-label`}>
                          {product.label}
                        </span>
                        <span className="pro-price-2">${product.price}</span>
                        <Link href={`Products${product.id}`}>
                          <Image
                            src={product.imgSrc}
                            alt={product.name}
                            layout="responsive"
                            width={500}
                            height={300}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                      <div className="product-info clearfix">
                        <div className="fix">
                          <h4 className="post-title">
                            <a href="#">{product.name}</a>
                          </h4>
                        </div>
                        <div className="fix">
                          <span className="pro-rating">
                            {renderStars(product.rating)}
                            <span>({product.rating} Rating)</span>
                          </span>
                        </div>
                        <div className="product-action clearfix">
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Wishlist"
                          >
                            <FavoriteBorder />
                          </a>
                          <a
                            href={`Products/${product.id}`}
                            data-bs-toggle="modal"
                            data-bs-target="#productModal"
                            title="Quick View"
                          >
                            <SearchOff />
                          </a>
                        </div>
                        <p className="mt-10">{product.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
