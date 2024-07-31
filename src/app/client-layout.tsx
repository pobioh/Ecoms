// app/client-layout.tsx (or `src/app/client-layout.tsx`)

"use client";

import { useEffect } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const loadScript = (
      src: string,
      strategy: "beforeInteractive" | "lazyOnload" = "lazyOnload"
    ) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = strategy === "lazyOnload";
      document.body.appendChild(script);
    };

    loadScript("/js/vendor/modernizr-3.11.2.min.js");
    loadScript("/js/vendor/jquery-3.6.0.min.js");
    loadScript("/js/bootstrap.bundle.min.js");
    loadScript("/js/vendor/jquery-migrate-3.3.2.min.js");
    loadScript("/js/jquery.meanmenu.js");

    loadScript("/js/slick.min.js");
    loadScript("/js/jquery.treeview.js");
    loadScript("/js/lightbox.min.js");
    loadScript("/js/jquery-ui.min.js");
    loadScript("/lib/js/jquery.nivo.slider.js");
    loadScript("/lib/home.js");
    loadScript("/js/jquery.nicescroll.min.js");
    loadScript("/js/countdon.min.js");
    loadScript("/js/wow.min.js");
    loadScript("/js/plugins.js");
    // loadScript("/js/main.min.js");
  }, []);

  return <>{children}</>;
}
