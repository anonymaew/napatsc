import "../styles/globals.css";
import "../styles/github-dark.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import s from "./b/blog.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={s.style}>
      <div>
        <Head>
          <link
            rel="icon"
            id="icon"
            href="https://raw.githubusercontent.com/anonymaew/ns-logo/master/ns-logo-32-w.svg"
          />
        </Head>
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export const Footer = () => {
  return (
    <div className={s.footer}>
      <hr />
      <p>
        © {new Date().getFullYear()}{" "}
        <a href="https://github.com/anonymaew">Napat Srichan</a>
      </p>
    </div>
  );
};
export default MyApp;
