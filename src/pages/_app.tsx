import type { AppProps /*, AppContext */ } from "next/app";
import { GlobalStyles } from "twin.macro";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

import Header from "@components/Header";
import SEO from "../../next-seo.config";
import "@styles/globals.css";

import "twin.macro";

const links = [
  {
    label: "Home",
    isSelected: true,
    link: "/",
    desc: "Home Page",
  },
  {
    label: "Gallery",
    isSelected: false,
    link: "/gallery",
    desc: "Gallery Page",
  },
  {
    label: "Content",
    isSelected: false,
    link: "/content",
    desc: "Content Page",
  },
  {
    label: "Contact",
    isSelected: false,
    link: "/contact",
    desc: "Contact Page",
  },
];
const ddmItems = [
  {
    label: "Settings",
  },
  {
    label: "Account",
  },
  {
    label: "Logout",
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class">
        <div tw="bg-white dark:bg-gray-800">
          <Header
            links={links}
            ddmItems={ddmItems}
            withShadow={true}
            hideHelp={true}
          />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
