import Head from "next/head";
import styles from "@styles/Home.module.css";
import ResourceLinks from "@components/ResourceLinks";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js</a> with TailwindCSS
        </h1>
        <h2 className={styles.subtitle}>
          TailwindCSS implemented with{" "}
          <a href="https://github.com/ben-rogerson/twin.macro">twin.macro</a>
        </h2>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <ResourceLinks />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
