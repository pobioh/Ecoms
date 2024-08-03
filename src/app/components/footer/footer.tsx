import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import {
  Adjust,
  Check,
  Dashboard,
  FavoriteBorder,
  Lock,
  Payment,
  ShoppingBag,
} from "@mui/icons-material";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-footer">
                  <h3 className="footer-title  title-border">Contact Us</h3>
                  <ul className="footer-contact">
                    <li>
                      <span>Address :</span>Winnipeg, Manitoba
                      <br />
                      Canada
                    </li>
                    <li>
                      <span>Cell-Phone :</span>204-588-0599
                    </li>
                    <li>
                      <span>Email :</span>your-email@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="single-footer">
                  <h3 className="footer-title  title-border">accounts</h3>
                  <ul className="footer-menu">
                    <li>
                      <Link href="#">
                        <Dashboard className="p-1" />
                        My Account
                      </Link>
                    </li>
                    <li>
                      <Link href="/Cart#wishlist">
                        <FavoriteBorder className="p-1" />
                        My Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link href="/Cart">
                        <ShoppingBag className="p-1" />
                        My Cart
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Lock className="p-1" />
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Payment className="p-1" />
                        Check out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="single-footer">
                  <h3 className="footer-title  title-border">shipping</h3>
                  <ul className="footer-menu">
                    <li>
                      <Link href="../#trending">
                        <Adjust className="p-1" />
                        New Products
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Adjust className="p-1" />
                        Top Sellers
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Adjust className="p-1" />
                        Manufactirers
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Adjust className="p-1" />
                        Suppliers
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Adjust className="p-1" />
                        Specials
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-footer">
                  <h3 className="footer-title  title-border">
                    your choice Products
                  </h3>
                  <div className="footer-product">
                    <div className="row">
                      <div className="col-sm-6 col-12">
                        <div className="footer-thumb">
                          <Link href="#">
                            <img src="img/footer/1.jpg" alt="" />
                          </Link>
                          <div className="footer-thumb-info">
                            <p>
                              <Link href="#">
                                Furniture Product
                                <br />
                                Name
                              </Link>
                            </p>
                            <h4 className="price-3">$ 60.00</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-12">
                        <div className="footer-thumb">
                          <Link href="#">
                            <img src="img/footer/1.jpg" alt="" />
                          </Link>
                          <div className="footer-thumb-info">
                            <p>
                              <Link href="#">
                                Furniture Product
                                <br />
                                Name
                              </Link>
                            </p>
                            <h4 className="price-3">$ 60.00</h4>
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

        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright">
                  <p className="mb-0">
                    &copy;{" "}
                    <Link
                      href="https://themeforest.net/user/codecarnival/portfolio"
                      target="_blank"
                    >
                      {" "}
                      CodeCarnival{" "}
                    </Link>{" "}
                    2022. All Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="payment  text-md-end">
                  <Link href="#">
                    <img src="img/payment/1.png" alt="" />
                  </Link>
                  <Link href="#">
                    <img src="img/payment/2.png" alt="" />
                  </Link>
                  <Link href="#">
                    <img src="img/payment/3.png" alt="" />
                  </Link>
                  <Link href="#">
                    <img src="img/payment/4.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
