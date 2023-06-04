import React, { useEffect } from "react";
import "../src/styles/globals.css";
import "../src/styles/vars.css";
import "antd/dist/antd.css";
import Head from "next/head";
import Script from "next/script";
import { MainProvider } from "../src/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <MainProvider>
        <Head>
          <title>Flytime Fest</title>
          <meta
            name="description"
            content="Nigeria’s first and longest-running indoor multi-day festival."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script id="nothing">
          var _ctct_m = &apos;c66e39c1d59272c8f1c25beaa1e2f4f6&apos;;{" "}
        </Script>

        <Script
          id="signupScript"
          src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
          async
          defer
        />
        <Component {...pageProps} />
      </MainProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
