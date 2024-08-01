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
    };

    loadScriptsInOrder();
  }, []);

  return <>{children}</>;
}
