const title = "Next.js Tailwind Demo | Twin Next";
const description =
  "Demo applcation showcasing Next.js + TailwindCSS implemented with Emotion and twin.macro";

const SEO = {
  title,
  description,
  canonical: `${process.env.PRODUCTION_URL}`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${process.env.PRODUCTION_URL}`,
    title,
    description,
    images: [
      {
        url: `${process.env.PRODUCTION_URL}/static/images/banner.jpg`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@stackshuffleio",
    site: "@stackshuffleio",
    cardType: "summary_large_image",
  },
};

export default SEO;
