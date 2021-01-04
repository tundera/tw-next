import type { AppProps /*, AppContext */ } from "next/app";
import { GlobalStyles } from "twin.macro";

import Header from "@components/Header";
import "@styles/globals.css";

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
    <div>
      <GlobalStyles />
      <div className="bg-white dark:bg-black">
        <Header links={links} ddmItems={ddmItems} />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
