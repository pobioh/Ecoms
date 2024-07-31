import { FavoriteBorder, Lock, Search, ShoppingBag } from "@mui/icons-material";

export default function SectionMenu() {
  return (
    <>
      <section className="slider-banner-area clearfix">
        <div className="banner-left floatleft">
          <div className="slider-banner">
            <div className="single-banner banner-1">
              <a className="banner-thumb" href="#">
                <img src="img/banner/1.jpg" alt="" />
              </a>
              <span className="pro-label new-label">new</span>
              <span className="price">$50.00</span>
              <div className="banner-brief">
                <h2 className="banner-title">
                  <a href="#">Product name</a>
                </h2>
                <p className="mb-0">Furniture</p>
              </div>
              <a href="#" className="button-one font-16px" data-text="Buy now">
                Buy now
              </a>
            </div>
            <div className="single-banner banner-2">
              <a className="banner-thumb" href="#">
                <img src="img/banner/2.jpg" alt="" />
              </a>
              <div className="banner-brief">
                <h2 className="banner-title">
                  <a href="#">New Product 2021</a>
                </h2>
                <p className="hidden-md hidden-sm d-none d-md-block">
                  Lorem Ipsum is simply dummy text of the printing and types
                  sate industry. Lorem Ipsum has been the industry.
                </p>
                <a
                  href="#"
                  className="button-one font-16px"
                  data-text="Buy now"
                >
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-right floatleft">
          <div className="slider-area">
            <div className="bend niceties preview-2">
              <div id="ensign-nivoslider" className="slides">
                <img
                  src="img/slider/slider-1/1.jpg"
                  alt=""
                  title="#slider-direction-1"
                />
                <img
                  src="img/slider/slider-1/2.jpg"
                  alt=""
                  title="#slider-direction-2"
                />
                <img
                  src="img/slider/slider-1/3.jpg"
                  alt=""
                  title="#slider-direction-3"
                />
              </div>
              <div id="slider-direction-1" className="t-cn slider-direction">
                <div className="slider-progress"></div>
                <div className="slider-content t-lfl s-tb slider-1">
                  <div className="title-container s-tb-c title-compress">
                    <div className="layer-1">
                      <div
                        className="wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0.5s"
                      >
                        <h2 className="slider-title3 text-uppercase mb-0">
                          welcome to our
                        </h2>
                      </div>
                      <div
                        className="wow fadeIn"
                        data-wow-duration="1.5s"
                        data-wow-delay="1.5s"
                      >
                        <h2 className="slider-title1 text-uppercase mb-0">
                          furniture
                        </h2>
                      </div>
                      <div
                        className="wow fadeIn"
                        data-wow-duration="2s"
                        data-wow-delay="2.5s"
                      >
                        <h3 className="slider-title2 text-uppercase">
                          gallery 2021
                        </h3>
                      </div>
                      <div
                        className="wow fadeIn"
                        data-wow-duration="2.5s"
                        data-wow-delay="3.5s"
                      >
                        <a
                          href="#"
                          className="button-one style-2 text-uppercase mt-20"
                          data-text="Shop now"
                        >
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="slider-direction-2" className="slider-direction">
                <div className="slider-progress"></div>
                <div className="slider-content t-lfl s-tb slider-1">
                  <div className="title-container s-tb-c title-compress">
                    <div className="layer-1">
                      <div
                        className="wow fadeInUpBig"
                        data-wow-duration="1s"
                        data-wow-delay="0.5s"
                      >
                        <h2 className="slider-title3 text-uppercase mb-0">
                          welcome to our
                        </h2>
                      </div>
                      <div
                        className="wow fadeInUpBig"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.5s"
                      >
                        <h2 className="slider-title1 text-uppercase">
                          furniture
                        </h2>
                      </div>
                      <div
                        className="wow fadeInUpBig"
                        data-wow-duration="2s"
                        data-wow-delay="0.5s"
                      >
                        <p className="slider-pro-brief">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable
                        </p>
                      </div>
                      <div
                        className="wow fadeInUpBig"
                        data-wow-duration="2.5s"
                        data-wow-delay="0.5s"
                      >
                        <a
                          href="#"
                          className="button-one style-2 text-uppercase mt-20"
                          data-text="Shop now"
                        >
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="slider-direction-3" className="slider-direction">
                <div className="slider-progress"></div>
                <div className="slider-content t-lfl s-tb slider-1">
                  <div className="title-container s-tb-c title-compress">
                    <div className="layer-1">
                      <div
                        className="wow fadeInUpBig"
                        data-wow-duration="1s"
                        data-wow-delay="0.5s"
                      >
                        <h2 className="slider-title3 text-uppercase mb-0">
                          welcome to our
                        </h2>
                      </div>
                      <div
                        className="wow fadeInUpBig"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.5s"
                      >
                        <h2 className="slider-title1 text-uppercase mb-0">
                          furniture
                        </h2>
                      </div>
                      <div
                        className="wow fadeInUpBig"
                        data-wow-duration="2s"
                        data-wow-delay="0.5s"
                      >
                        <h3 className="slider-title2 text-uppercase">
                          gallery 2021
                        </h3>
                      </div>
                      <div
                        className="wow fadeInUpBig"
                        data-wow-duration="2.5s"
                        data-wow-delay="0.5s"
                      >
                        <p className="slider-pro-brief">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable
                        </p>
                      </div>
                      <div
                        className="wow fadeInUpBig"
                        data-wow-duration="3s"
                        data-wow-delay="0.5s"
                      >
                        <a
                          href="#"
                          className="button-one style-2 text-uppercase mt-20"
                          data-text="Shop now"
                        >
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-account d-none d-md-block">
          <div className="table">
            <div className="table-cell">
              <ul>
                <li>
                  <a className="search-open" href="#" title="Search">
                    <Search />
                  </a>
                </li>
                <li>
                  <a href="#" title="Login">
                    <Lock />
                  </a>
                  <div className="customer-login text-left">
                    <form action="#">
                      <h4 className="title-1 title-border text-uppercase mb-30">
                        Registered customers
                      </h4>
                      <p className="text-gray">
                        If you have an account with us, Please login!
                      </p>
                      <input
                        type="text"
                        name="email"
                        placeholder="Email here..."
                      />
                      <input type="password" placeholder="Password" />
                      <p>
                        <a className="text-gray" href="#">
                          Forget your password?
                        </a>
                      </p>
                      <button
                        className="button-one submit-button mt-15"
                        data-text="login"
                        type="submit"
                      >
                        login
                      </button>
                    </form>
                  </div>
                </li>
                <li>
                  <ShoppingBag />
                </li>
                <li>
                  {/* wish list  */}
                  <FavoriteBorder />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
