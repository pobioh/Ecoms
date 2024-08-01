import Link from "next/link";
import HandleBack from "./BackButton";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div
        className="overlay-bg"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1029611/pexels-photo-1029611.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover", // optional: to ensure the image covers the entire div
          backgroundPosition: "center", // optional: to center the image
          backgroundRepeat: "no-repeat", // optional: to avoid repeating the image
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-banner">
                <div className="heading-banner-title">
                  <h2>About Us</h2>
                </div>
                <div className="breadcumbs pb-15">
                  <ul>
                    <li>
                      <Link href="../">Home</Link>
                    </li>
                    <li>About Us</li>
                    <li>
                      <HandleBack />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-area  pt-10 pb-20">
        <div className="container">
          <div className="about-us bg-white">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-photo">
                  <Image
                    src="/img/bg/about.png"
                    alt=""
                    width={300}
                    height={200}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-brief bg-dark-white">
                  <h4 className="title-1 title-border text-uppercase mb-30">
                    about hurst
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magn
                    aliqua. Ut enim ad minim veniam, ommodo consequa. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia is be deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit.
                    voluptatem accusantium doloremque laudantium, totam remes
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* teams  */}
      <div className="team-member-area pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title-border">Team Member</h2>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-member text-center bg-white mt-25">
                  <Image
                    width={300}
                    height={200}
                    src="/img/team/1.png"
                    alt=""
                  />
                  <h3 className="text-uppercase mt-20">Nancy holland</h3>
                  <h4 className="text-uppercase text-gray">Chairman</h4>
                  <p className="text-gray">
                    There are many variations of passage of Lorem Ipsum
                    available, but the in majority have suffered.
                  </p>
                  <div className="team-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-rss"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-member text-center bg-white mt-25">
                  <Image
                    src="/img/team/2.png"
                    width={300}
                    height={200}
                    alt=""
                  />
                  <h3 className="text-uppercase mt-20">Heather Estrada</h3>
                  <h4 className="text-uppercase text-gray">Chief Marketing</h4>
                  <p className="text-gray">
                    There are many variations of passage of Lorem Ipsum
                    available, but the in majority have suffered.
                  </p>
                  <div className="team-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-rss"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-member text-center bg-white mt-25">
                  <Image
                    width={300}
                    height={200}
                    src="/img/team/3.png"
                    alt=""
                  />
                  <h3 className="text-uppercase mt-20">Nancy holland</h3>
                  <h4 className="text-uppercase text-gray">fashion desinger</h4>
                  <p className="text-gray">
                    There are many variations of passage of Lorem Ipsum
                    available, but the in majority have suffered.
                  </p>
                  <div className="team-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-rss"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-member text-center bg-white mt-25">
                  <Image
                    width={300}
                    height={200}
                    src="/img/team/1.png"
                    alt=""
                  />
                  <h3 className="text-uppercase mt-20">Sara Knight</h3>
                  <h4 className="text-uppercase text-gray">Graphic Design</h4>
                  <p className="text-gray">
                    There are many variations of passage of Lorem Ipsum
                    available, but the in majority have suffered.
                  </p>
                  <div className="team-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-rss"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-pinterest"></i>
                        </a>
                      </li>
                    </ul>
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
