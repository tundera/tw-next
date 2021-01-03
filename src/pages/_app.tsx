import type { AppProps /*, AppContext */ } from "next/app";
import { GlobalStyles } from "twin.macro";

import Header from "@components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
