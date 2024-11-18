import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <main className={styles.container}>
      <img src="/images/houseplantgif.gif" alt="cartoon style gif of changing houseplants" />
      <p>loading...</p>
    </main>
  );
}
