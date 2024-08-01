// components/Slideshow.js

import Image from "next/image";

const CustomSlider = () => {
  return (
    <>
      <div className="slider-right floatleft">
        <div className="slider-area">
          <div className="bend niceties preview-2">
            <div id="ensign-nivoslider" className="slides">
              <Image width={300} height={200}
                src="/img/slider/slider-1/1.jpg"
                alt=""
                title="#slider-direction-1"
              />
              <Image width={300} height={200}
                src="/img/slider/slider-1/2.jpg"
                alt=""
                title="#slider-direction-2"
              />
              <Image width={300} height={200}
                src="/img/slider/slider-1/3.jpg"
                alt=""
                title="#slider-direction-3"
              />
            </div>
            <div id="slider-direction-1" className="t-cn slider-direction">
              <div className="slider-progress"></div>
              <div className="slider-content t-lfl s-tb slider-1">
                <div className="title-container s-tb-c title-compress">
                  <div className="layer-1">
                    <div
                      className="wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                    >
                      <h2 className="slider-title3 text-uppercase mb-0">
                        welcome to our
                      </h2>
                    </div>
                    <div
                      className="wow fadeIn"
                      data-wow-duration="1.5s"
                      data-wow-delay="1.5s"
                    >
                      <h2 className="slider-title1 text-uppercase mb-0">
                        furniture
                      </h2>
                    </div>
                    <div
                      className="wow fadeIn"
                      data-wow-duration="2s"
                      data-wow-delay="2.5s"
                    >
                      <h3 className="slider-title2 text-uppercase">
                        gallery 2021
                      </h3>
                    </div>
                    <div
                      className="wow fadeIn"
                      data-wow-duration="2.5s"
                      data-wow-delay="3.5s"
                    >
                      <a
                        href="#"
                        className="button-one style-2 text-uppercase mt-20"
                        data-text="Shop now"
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="slider-direction-2" className="slider-direction">
              <div className="slider-progress"></div>
              <div className="slider-content t-lfl s-tb slider-1">
                <div className="title-container s-tb-c title-compress">
                  <div className="layer-1">
                    <div
                      className="wow fadeInUpBig"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                    >
                      <h2 className="slider-title3 text-uppercase mb-0">
                        welcome to our
                      </h2>
                    </div>
                    <div
                      className="wow fadeInUpBig"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.5s"
                    >
                      <h2 className="slider-title1 text-uppercase">
                        furniture
                      </h2>
                    </div>
                    <div
                      className="wow fadeInUpBig"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <p className="slider-pro-brief">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don&apos;t look even slightly believable
                      </p>
                    </div>
                    <div
                      className="wow fadeInUpBig"
                      data-wow-duration="2.5s"
                      data-wow-delay="0.5s"
                    >
                      <a
                        href="#"
                        className="button-one style-2 text-uppercase mt-20"
                        data-text="Shop now"
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="slider-direction-3" className="slider-direction">
              <div className="slider-progress"></div>
              <div className="slider-content t-lfl s-tb slider-1">
                <div className="title-container s-tb-c title-compress">
                  <div className="layer-1">
                    <div
                      className="wow fadeInUpBig"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                    >
                      <h2 className="slider-title3 text-uppercase mb-0">
                        welcome to our
                      </h2>
                    </div>
                    <div
                      className="wow fadeInUpBig"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.5s"
                    >
                      <h2 className="slider-title1 text-uppercase mb-0">
                        furniture
                      </h2>
                    </div>
                    <div
                      className="wow fadeInUpBig"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <h3 className="slider-title2 text-uppercase">
                        gallery 2021
                      </h3>
                    </div>
                    <div
                      className="wow fadeInUpBig"
                      data-wow-duration="2.5s"
                      data-wow-delay="0.5s"
                    >
                      <p className="slider-pro-brief">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don&apos;t look even slightly believable
                      </p>
                    </div>
                    <div
                      className="wow fadeInUpBig"
                      data-wow-duration="3s"
                      data-wow-delay="0.5s"
                    >
                      <a
                        href="#"
                        className="button-one style-2 text-uppercase mt-20"
                        data-text="Shop now"
                      >
                        Shop now
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
};

export default CustomSlider;
