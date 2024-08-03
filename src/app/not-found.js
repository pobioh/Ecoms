"use client";
import HeaderPage from "./components/header/header";
import Footer from "./components/footer/footer";
import HandleBack from "./components/BackButton";

export default function NotFound() {
  return (
    <>
      <HeaderPage />
      <div className="heading-banner-area overlay-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-banner">
                <div className="heading-banner-title">
                  <h2>404</h2>
                </div>
                <div className="breadcumbs pb-15">
                  <ul>
                    <li>
                      <HandleBack />
                    </li>
                    <li>404</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="area-404 pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-content text-center">
                {/* <img src="img/bg/error.png" alt="" /> */}
                <h4 className="text-light-black mt-60">Ooops.... Error 404</h4>
                <h5 className="text-light-black">
                  Sorry, But the page you are looking for does't exist
                </h5>
                <div className="error-form mt-30 mb-30">
                  <form action="#">
                    <input type="text" placeholder="Search here..." />
                    <button type="submit">
                      <i className="zmdi zmdi-search"></i>
                    </button>
                  </form>
                </div>
                <p className="text-uppercase">Or</p>
                <a
                  className="button-one submit-btn-4 go-to-home bg-white text-uppercase text-light-black"
                  href="index.html"
                  data-text="go to home page"
                >
                  go to home page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
