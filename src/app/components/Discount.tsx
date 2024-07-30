export default function Discount() {
  return (
    <>
      <div className="discount-product-area">
        <div className="container">
          <div className="row">
            <div className="discount-product-slider dots-bottom-right">

              <div className="col-lg-12">
                <div className="discount-product">
                  <img src="img/discount/4.jpg" alt="" />
                  <div className="discount-img-brief">
                    <div className="onsale">
                      <span className="onsale-text">On Sale</span>
                      <span className="onsale-price">$ 80.00</span>
                    </div>
                    <div className="discount-info">
                      <h1 className="text-dark-red d-none d-md-block">
                        Discount 50%
                      </h1>
                      <p className="d-none d-md-block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed does eiusmodes tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim venim, quis nostrud
                        exercitation ullamco laboris.
                      </p>
                      <a
                        href="#"
                        className="button-one font-16px style-3 text-uppercase mt-md-5"
                        data-text="Buy now"
                      >
                        Buy now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
