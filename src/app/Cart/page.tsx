import CartPreview from "../components/CartPreview";
import Subscription from "../components/Subscribe";
import Footer from "../components/footer/footer";
import HeaderPage from "../components/header/header";

export default function Cart() {
  return (
    <>
    <HeaderPage />
      <CartPreview />
      <Subscription />
      <Footer />
    </>
  );
}
