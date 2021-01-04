import Head from "next/head";

import { Container, Main, Footer } from "@styles/components";
import Welcome from "@components/Welcome";
import { css } from "twin.macro";

export default function Home() {
  const name = "Demo App";

  return (
    <Container>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Welcome title={name} />
      </Main>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deployed with{" "}
          <img
            src="/icons/vercel.svg"
            alt="Vercel Logo"
            css={css`
              height: 1em;
            `}
          />
        </a>
      </Footer>
    </Container>
  );
}
