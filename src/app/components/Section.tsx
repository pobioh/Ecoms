import { FavoriteBorder, Lock, Search, ShoppingBag } from "@mui/icons-material";
import CustomSlider from "./SlideMenu";
import Image from "next/image";

export default function SectionMenu() {
  return (
    <>
      <section className="slider-banner-area clearfix">
        <div className="banner-left floatleft">
          <div className="slider-banner">
            <div className="single-banner banner-1">
              <a className="banner-thumb" href="#">
                <Image src="/img/banner/1.jpg" alt="" />
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
                <Image src="/img/banner/2.jpg" alt="" />
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
        {/* slideshow  */}
       <CustomSlider />
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
