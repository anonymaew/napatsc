import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          id="icon"
          href="https://raw.githubusercontent.com/anonymaew/ns-logo/master/ns-logo-32-w.svg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
