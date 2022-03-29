import "../styles/index.scss";
import brand from "../public/Images/brand.svg";
import Image from "next/image";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="site-wrapper">
      <div className="brand">
        <Image src={brand} />
      </div>

      <div className="page-wrapper">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
