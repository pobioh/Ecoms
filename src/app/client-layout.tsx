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
      return new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = strategy === "lazyOnload";
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    };

    const loadScriptsInOrder = async () => {
      await loadScript("/js/vendor/jquery-3.6.0.min.js");
      await loadScript("/lib/js/jquery.nivo.slider.js");
      await loadScript("/lib/home.js");
      // You can uncomment and include other scripts here if needed
      await loadScript("/js/vendor/modernizr-3.11.2.min.js");
      await loadScript("/js/bootstrap.bundle.min.js");
      await loadScript("/js/vendor/jquery-migrate-3.3.2.min.js");
      await loadScript("/js/jquery.meanmenu.js");
      await loadScript("/js/slick.min.js");
      await loadScript("/js/jquery.treeview.js");
      await loadScript("/js/lightbox.min.js");
      await loadScript("/js/jquery-ui.min.js");
      await loadScript("/js/jquery.nicescroll.min.js");
    };

    loadScriptsInOrder();
  }, []);

  return <>{children}</>;
}
