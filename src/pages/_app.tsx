import type { AppProps /*, AppContext */ } from "next/app";
import { GlobalStyles } from "twin.macro";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
