import Image from "next/image";
import HeaderPage from "../components/header/header";
import Footer from "../components/footer/footer";
import Discount from "../components/Discount";
import Subscription from "../components/Subscribe";
import SectionMenu from "../components/Section";
import ProductsPage from "../components/TrendingPage";
import AllProducts from "../components/Products";

export default function HomePage() {
  return (
    <>
      <HeaderPage />

      <br />
      <br />
      <SectionMenu />
      <ProductsPage />
      <Discount />
      <AllProducts />
      <Subscription />
      <Footer />
    </>
  );
}
