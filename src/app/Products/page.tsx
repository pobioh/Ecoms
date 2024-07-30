import AllProducts from "../components/Products";
import Footer from "../components/footer/footer";
import HeaderPage from "../components/header/header";


export default function ProductsPage() {
  return (
    <>
    <HeaderPage/>
      <AllProducts />
      <Footer />
    </>
  );
}
