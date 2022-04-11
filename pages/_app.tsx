import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import s from "../styles/style.module.scss";
import "../styles/github-dark.min.css";

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
    <footer className={s.footer}>
      <hr />
      <p>
        © {new Date().getFullYear()}{" "}
        <a href="https://github.com/anonymaew">Napat Srichan</a>
      </p>
    </footer>
  );
};
export default MyApp;
