import Image from "next/image";
import HeaderPage from "../components/header/header";
import Footer from "../components/footer/footer";
import Discount from "../components/Discount";
import Subscription from "../components/Subscribe";
import SectionMenu from "../components/Section";
// import ProductsPage from "../components/TrendingPage";
import AllProducts from "../components/Products";
import { Typography } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <HeaderPage />

      <br />
      <br />
      <SectionMenu />
      {/* <ProductsPage /> */}
      <Discount />
      <br />
      <br />
      <br />
      <div className="bg-gray-500 pb-8">
        <div className="section-title text-center pt-8">
          <h2 className="title-border text-white">All Products</h2>
        </div>
        <AllProducts />
      </div>

      <Subscription />
      <Footer />
    </>
  );
}
