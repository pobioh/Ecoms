"use client"; // Ensure this is a client component

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import HeaderPage from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import "./style.css";
import ImageModal from "./modal";
import { FavoriteBorder, ShoppingBag, ZoomIn } from "@mui/icons-material";
import { Zoom } from "@mui/material";
import Link from "next/link";
import HandleBack from "@/app/components/BackButton";

export default function ProductDetailPage() {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    console.log("Product ID:", productId); // Debugging line

    if (productId) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/${productId}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error("Failed to fetch product details:", error);
        }
      };

      fetchProduct();
    }
  }, [productId]);

  if (!product) return;

  const productImages = [
    "/img/product/6.jpg",
    "/img/product/7.jpg",
    "/img/product/8.jpg",
    "/img/product/9.jpg",
  ];

  const handleImageClick = (src: string) => {
    const index = productImages.indexOf(src);
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(productImages[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < productImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(productImages[currentIndex + 1]);
    }
  };

 

  return (
    <>
      <HeaderPage />
      <div className="heading-banner-area overlay-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-banner">
                <div className="heading-banner-title">
                  <h2>{product.name}</h2>
                </div>
                <div className="breadcumbs pb-15">
                  <ul>
                    <li>
                      <Link href="./">Home</Link>
                    </li>
                    <li>
                      <HandleBack />
                    </li>
                    <li>{product.name}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-area single-pro-area pt-20 pb-80 product-style-2">
        <div className="container">
          <div className="row shop-list single-pro-info no-sidebar">
            <div className="col-lg-12">
              <div className="single-product clearfix">
                <div className="single-pro-slider single-big-photo view-lightbox slider-for">
                  <div>
                    <img src={`/${product.imgSrc}`} alt={product.imgSrc} />
                    <a
                      className="view-full-screen"
                      href="img/single-product/large/1.jpg"
                      data-lightbox="roadtrip"
                      data-title="My caption"
                    >
                      <i className="zmdi zmdi-zoom-in"></i>
                    </a>
                  </div>
                  <div>
                    <img src="img/single-product/medium/2.jpg" alt="" />
                    <a
                      className="view-full-screen"
                      href="img/single-product/large/2.jpg"
                      data-lightbox="roadtrip"
                      data-title="My caption"
                    >
                      <i className="zmdi zmdi-zoom-in"></i>
                    </a>
                  </div>
                  <div>
                    <img src="img/single-product/medium/3.jpg" alt="" />
                    <a
                      className="view-full-screen"
                      href="img/single-product/large/3.jpg"
                      data-lightbox="roadtrip"
                      data-title="My caption"
                    >
                      <i className="zmdi zmdi-zoom-in"></i>
                    </a>
                  </div>
                  <div>
                    <img src="img/single-product/medium/4.jpg" alt="" />
                    <a
                      className="view-full-screen"
                      href="img/single-product/large/4.jpg"
                      data-lightbox="roadtrip"
                      data-title="My caption"
                    >
                      <i className="zmdi zmdi-zoom-in"></i>
                    </a>
                  </div>
                  <div>
                    <img src="img/single-product/medium/5.jpg" alt="" />
                    <a
                      className="view-full-screen"
                      href="img/single-product/large/5.jpg"
                      data-lightbox="roadtrip"
                      data-title="My caption"
                    >
                      <i className="zmdi zmdi-zoom-in"></i>
                    </a>
                  </div>
                </div>

                <div className="product-info">
                  <div className="fix">
                    <h4 className="post-title floatleft">dummy Product name</h4>
                    <span className="pro-rating floatright">
                      <a href="#">⭐</a>
                      <a href="#">⭐</a>
                      <a href="#">⭐</a>
                      <a href="#">⭐</a>
                      <a href="#">⭐</a>
                      <span>( 27 Rating )</span>
                    </span>
                  </div>
                  <div className="fix mb-20">
                    <span className="pro-price">$ 56.20</span>
                  </div>
                  <div className="product-description">
                    <p>{product.description} </p>
                  </div>

                  <div className="color-filter single-pro-color mb-20 clearfix">
                    <ul>
                      <li>
                        <span className="color-title text-capitalize">
                          color
                        </span>
                      </li>
                      <li>
                        <a className="active" href="#">
                          <span className="color color-1"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="color color-2"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="color color-7"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="color color-3"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="color color-4"></span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="size-filter single-pro-size mb-35 clearfix">
                    <ul>
                      <li>
                        <span className="color-title text-capitalize">
                          size
                        </span>
                      </li>
                      <li>
                        <a href="#">M</a>
                      </li>
                      <li>
                        <a className="active" href="#">
                          S
                        </a>
                      </li>
                      <li>
                        <a href="#">L</a>
                      </li>
                      <li>
                        <a href="#">SL</a>
                      </li>
                      <li>
                        <a href="#">XL</a>
                      </li>
                    </ul>
                  </div>

                  <div className="clearfix">
                    <div className="cart-plus-minus">
                      <div className="dec qtybutton">-</div>
                      <input
                        type="text"
                        value="02"
                        name="qtybutton"
                        className="cart-plus-minus-box"
                      />
                      <div className="inc qtybutton">+</div>
                    </div>

                    <div className="product-action clearfix">
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title="Wishlist"
                      >
                        <FavoriteBorder />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#productModal"
                        title="Quick View"
                      >
                        <ZoomIn />
                      </a>

                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <ShoppingBag />
                      </a>
                    </div>
                  </div>
                  <div className="slider-container">
                    <div className="single-pro-slider single-sml-photo slider-nav swiper-container">
                      <div className="swiper-wrapper row d-flex">
                        {productImages.map((src, index) => (
                          <div
                            className="swiper-slide col-lg-3 m-2"
                            key={index}
                          >
                            <img
                              src={src}
                              alt={`Thumbnail ${index + 1}`}
                              className="thumbnail"
                              onClick={() => handleImageClick(src)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    {selectedImage && (
                      <ImageModal
                        imageUrls={productImages}
                        currentIndex={currentIndex}
                        onClose={handleCloseModal}
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="single-pro-tab">
            <div className="row">
              <div className="col-md-3">
                <div className="single-pro-tab-menu">
                  <ul className="nav d-block">
                    <li>
                      <a href="#description" data-bs-toggle="tab">
                        Description
                      </a>
                    </li>
                    <li>
                      <a
                        className="active"
                        href="#reviews"
                        data-bs-toggle="tab"
                      >
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a href="#information" data-bs-toggle="tab">
                        Information
                      </a>
                    </li>
                    <li>
                      <a href="#tags" data-bs-toggle="tab">
                        Tags
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="tab-content">
                  <div className="tab-pane" id="description">
                    <div className="pro-tab-info pro-description">
                      <h3 className="tab-title title-border mb-30">
                        dummy Product name
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer accumsan egestas elese ifend. Phasellus a felis
                        at est bibendum feugiat ut eget eni Praesent et messages
                        in con sectetur posuere dolor non.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer accumsan egestas elese ifend. Phasellus a felis
                        at est bibendum feugiat ut eget eni Praesent et messages
                        in con sectetur posuere dolor non.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer accumsan egestas elese ifend. Phasellus a felis
                        at est bibendum feugiat ut eget eni Praesent et messages
                        in con sectetur posuere dolor non.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane active" id="reviews">
                    <div className="pro-tab-info pro-reviews">
                      <div className="customer-review mb-60">
                        <h3 className="tab-title title-border mb-30">
                          Customer review
                        </h3>
                        <ul className="product-comments clearfix">
                          <li className="mb-30">
                            <div className="pro-reviewer">
                              <img src="img/reviewer/1.jpg" alt="" />
                            </div>
                            <div className="pro-reviewer-comment">
                              <div className="fix">
                                <div className="floatleft mbl-center">
                                  <h5 className="text-uppercase mb-0">
                                    <strong>Gerald Barnes</strong>
                                  </h5>
                                  <p className="reply-date">
                                    27 Jun, 2021 at 2:30pm
                                  </p>
                                </div>
                                <div className="comment-reply floatright">
                                  <a href="#">
                                    <i className="zmdi zmdi-mail-reply"></i>
                                  </a>
                                  <a href="#">
                                    <i className="zmdi zmdi-close"></i>
                                  </a>
                                </div>
                              </div>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer accumsan egestas elese
                                ifend. Phasellus a felis at est bibendum feugiat
                                ut eget eni Praesent et messages in con sectetur
                                posuere dolor non.
                              </p>
                            </div>
                          </li>
                          <li className="threaded-comments">
                            <div className="pro-reviewer">
                              <img src="img/reviewer/1.jpg" alt="" />
                            </div>
                            <div className="pro-reviewer-comment">
                              <div className="fix">
                                <div className="floatleft mbl-center">
                                  <h5 className="text-uppercase mb-0">
                                    <strong>Gerald Barnes</strong>
                                  </h5>
                                  <p className="reply-date">
                                    27 Jun, 2021 at 2:30pm
                                  </p>
                                </div>
                                <div className="comment-reply floatright">
                                  <a href="#">
                                    <i className="zmdi zmdi-mail-reply"></i>
                                  </a>
                                  <a href="#">
                                    <i className="zmdi zmdi-close"></i>
                                  </a>
                                </div>
                              </div>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer accumsan egestas elese
                                ifend. Phasellus a felis at est bibendum feugiat
                                ut eget eni Praesent et messages in con sectetur
                                posuere dolor non.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="leave-review">
                        <h3 className="tab-title title-border mb-30">
                          Leave your reviw
                        </h3>
                        <div className="your-rating mb-30">
                          <p className="mb-10">
                            <strong>Your Rating</strong>
                          </p>
                          <span>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                          </span>
                          <span className="separator">|</span>
                          <span>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                          </span>
                          <span className="separator">|</span>
                          <span>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                          </span>
                          <span className="separator">|</span>
                          <span>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                          </span>
                          <span className="separator">|</span>
                          <span>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                            <a href="#">
                              <i className="zmdi zmdi-star-outline"></i>
                            </a>
                          </span>
                        </div>
                        <div className="reply-box">
                          <form action="#">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  placeholder="Your name here..."
                                  name="name"
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  placeholder="Subject..."
                                  name="name"
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <textarea
                                  className="custom-textarea"
                                  name="message"
                                  placeholder="Your review here..."
                                ></textarea>
                                <button
                                  type="submit"
                                  data-text="submit review"
                                  className="button-one submit-button mt-20"
                                >
                                  submit review
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="information">
                    <div className="pro-tab-info pro-information">
                      <h3 className="tab-title title-border mb-30">
                        Product information
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer accumsan egestas elese ifend. Phasellus a felis
                        at est bibendum feugiat ut eget eni Praesent et messages
                        in con sectetur posuere dolor non.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer accumsan egestas elese ifend. Phasellus a felis
                        at est bibendum feugiat ut eget eni Praesent et messages
                        in con sectetur posuere dolor non.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer accumsan egestas elese ifend. Phasellus a felis
                        at est bibendum feugiat ut eget eni Praesent et messages
                        in con sectetur posuere dolor non.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tags">
                    <div className="pro-tab-info pro-information">
                      <h3 className="tab-title title-border mb-30">tags</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer accumsan egestas elese ifend. Phasellus a felis
                        at est bibendum feugiat ut eget eni Praesent et messages
                        in con sectetur posuere dolor non.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer accumsan egestas elese ifend. Phasellus a felis
                        at est bibendum feugiat ut eget eni Praesent et messages
                        in con sectetur posuere dolor non.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer accumsan egestas elese ifend. Phasellus a felis
                        at est bibendum feugiat ut eget eni Praesent et messages
                        in con sectetur posuere dolor non.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
