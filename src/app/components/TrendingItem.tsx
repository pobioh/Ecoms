import { Star, StarHalf } from "@mui/icons-material";

export default function TrendingItem() {
  return (
    <>
      <div className="product-area pt-80 pb-35">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title-border">Trend Products</h2>
              </div>
              <div className="product-slider style-1 arrow-left-right">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="single-product">
                      <div className="product-img">
                        <span className="pro-label new-label">new</span>
                        <a href="single-product.html">
                          <img src="img/product/1.jpg" alt="" />
                        </a>
                        <div className="product-action clearfix">
                          <a
                            href="wishlist.html"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Wishlist"
                          >
                            <i className="zmdi zmdi-favorite-outline"></i>
                          </a>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#productModal"
                            title="Quick View"
                          >
                            <i className="zmdi zmdi-zoom-in"></i>
                          </a>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                          >
                            <i className="zmdi zmdi-refresh"></i>
                          </a>
                          <a
                            href="cart.html"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Add To Cart"
                          >
                            <i className="zmdi zmdi-shopping-cart-plus"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-info clearfix">
                        <div className="fix">
                          <h4 className="post-title floatleft">
                            <a href="#">dummy Product name</a>
                          </h4>
                          <p className="floatright hidden-sm d-none d-md-block">
                            Furniture
                          </p>
                        </div>
                        <div className="fix">
                          <span className="pro-price floatleft">$ 56.20</span>
                          <span className="pro-rating floatright">
                            <a href="#">
                              <Star />
                            </a>
                            <a href="#">
                              <Star />
                            </a>
                            <a href="#">
                              <Star />
                            </a>
                            <a href="#">
                              <StarHalf />
                            </a>
                            <a href="#">
                              <StarHalf />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="single-product">
                      <div className="product-img">
                        <span className="pro-label sale-label">Sale</span>
                        <a href="single-product.html">
                          <img src="img/product/2.jpg" alt="" />
                        </a>
                        <div className="product-action clearfix">
                          <a
                            href="wishlist.html"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Wishlist"
                          >
                            <i className="zmdi zmdi-favorite-outline"></i>
                          </a>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#productModal"
                            title="Quick View"
                          >
                            <i className="zmdi zmdi-zoom-in"></i>
                          </a>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                          >
                            <i className="zmdi zmdi-refresh"></i>
                          </a>
                          <a
                            href="cart.html"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Add To Cart"
                          >
                            <i className="zmdi zmdi-shopping-cart-plus"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-info clearfix">
                        <div className="fix">
                          <h4 className="post-title floatleft">
                            <a href="#">dummy Product name</a>
                          </h4>
                          <p className="floatright hidden-sm d-none d-md-block">
                            Furniture
                          </p>
                        </div>
                        <div className="fix">
                          <span className="pro-price floatleft">$ 56.20</span>
                          <span className="pro-rating floatright">
                            <a href="#">
                              <Star />
                            </a>
                            <a href="#">
                              <Star />
                            </a>
                            <a href="#">
                              <Star />
                            </a>
                            <a href="#">
                              <StarHalf />
                            </a>
                            <a href="#">
                              <StarHalf />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="single-product">
                      <div className="product-img">
                        <a href="single-product.html">
                          <img src="img/product/3.jpg" alt="" />
                        </a>
                        <div className="product-action clearfix">
                          <a
                            href="wishlist.html"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Wishlist"
                          >
                            <i className="zmdi zmdi-favorite-outline"></i>
                          </a>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#productModal"
                            title="Quick View"
                          >
                            <i className="zmdi zmdi-zoom-in"></i>
                          </a>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                          >
                            <i className="zmdi zmdi-refresh"></i>
                          </a>
                          <a
                            href="cart.html"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Add To Cart"
                          >
                            <i className="zmdi zmdi-shopping-cart-plus"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-info clearfix">
                        <div className="fix">
                          <h4 className="post-title floatleft">
                            <a href="#">dummy Product name</a>
                          </h4>
                          <p className="floatright hidden-sm d-none d-md-block">
                            Furniture
                          </p>
                        </div>
                        <div className="fix">
                          <span className="pro-price floatleft">$ 56.20</span>
                          <span className="pro-rating floatright">
                            <a href="#">
                              <Star />
                            </a>
                            <a href="#">
                              <Star />
                            </a>
                            <a href="#">
                              <Star />
                            </a>
                            <a href="#">
                              <StarHalf />
                            </a>
                            <a href="#">
                              <StarHalf />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="single-product">
                      <div className="product-img">
                        <a href="single-product.html">
                          <img src="img/product/4.jpg" alt="" />
                        </a>
                        <div className="product-action clearfix">
                          <a
                            href="wishlist.html"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Wishlist"
                          >
                            <i className="zmdi zmdi-favorite-outline"></i>
                          </a>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#productModal"
                            title="Quick View"
                          >
                            <i className="zmdi zmdi-zoom-in"></i>
                          </a>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                          >
                            <i className="zmdi zmdi-refresh"></i>
                          </a>
                          <a
                            href="cart.html"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Add To Cart"
                          >
                            <i className="zmdi zmdi-shopping-cart-plus"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-info clearfix">
                        <div className="fix">
                          <h4 className="post-title floatleft">
                            <a href="#">dummy Product name</a>
                          </h4>
                          <p className="floatright hidden-sm d-none d-md-block">
                            Furniture
                          </p>
                        </div>
                        <div className="fix">
                          <span className="pro-price floatleft">$ 56.20</span>
                          <span className="pro-rating floatright">
                            <a href="#">
                              <Star />
                            </a>
                            <a href="#">
                              <Star />
                            </a>
                            <a href="#">
                              <Star />
                            </a>
                            <a href="#">
                              <StarHalf />
                            </a>
                            <a href="#">
                              <StarHalf />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
