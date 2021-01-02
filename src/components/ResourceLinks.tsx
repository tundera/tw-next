import styles from "@styles/Home.module.css";
import type { FC } from "react";

const ResourceLinks: FC = () => {
  return (
    <div className={styles.grid}>
      <a href="https://nextjs.org/docs" className={styles.card}>
        <h3>Documentation &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a href="https://tailwindcss.com/docs" className={styles.card}>
        <h3>TailwindCSS &rarr;</h3>
        <p>Learn about TailwindCSS by exploring the official documentation!</p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/master/examples"
        className={styles.card}
      >
        <h3>Template &rarr;</h3>
        <p>
          Pick up where this example leaves off to jumpstart your own Next.js +
          TailwindCSS app
        </p>
      </a>

      <a
        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
      >
        <h3>Blog Post &rarr;</h3>
        <p>
          Want to create your own template from scratch? Check out the
          walkthrough <a href="#">here</a>.
        </p>
      </a>
    </div>
  );
};

export default ResourceLinks;
