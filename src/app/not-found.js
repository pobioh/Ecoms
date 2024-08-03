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

      <main className="grid min-h-full place-items-center bg-white sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <HandleBack />
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
