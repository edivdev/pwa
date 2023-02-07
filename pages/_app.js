import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components/theme";
import "@fontsource/quicksand";
import "@fontsource/just-another-hand";
import Layout from "../components/ui/Layout";
import "../styles/styles.css";
import Script from "next/script";
import { useRouter } from "next/router";
import * as ga from "../lib/ga/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
