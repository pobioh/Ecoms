import Link from "next/link";
import AllProducts from "../components/Products";
import Footer from "../components/footer/footer";
import HeaderPage from "../components/header/header";


export default function ProductsPage() {
  return (
    <>
    <HeaderPage/>
    <div className="heading-banner-area overlay-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-banner">
                <div className="heading-banner-title">
                  <h2>ALl Product </h2>
                </div>
                <div className="breadcumbs pb-15">
                  <ul>
                    <li>
                      <Link href="../">Home</Link>
                    </li>
                    <li>Product grid view</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllProducts />
      <Footer />
    </>
  );
}
