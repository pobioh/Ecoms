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

     
      <Footer />
    </>
  );
}
