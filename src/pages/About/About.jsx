import { Link } from "react-router-dom";

import styles from "./About.module.scss";

export default function About() {
  return (
    <main className={styles.container}>
      <header>
        <h1>About me</h1>
      </header>
      <p>I love owning and keeping houseplants. I thought of this app because I am terrible at remembering things but keeping on top of watering and feeding is important.</p>
      <p> Some plants can be picky about how much sun they get and others can be toxic to pets and/or young children. I hope this app will help you choose the correct plants for the rooms in your house.</p>
      <p>This is my final project on my software engineering course. I have used Django with Python for the back end and React with JavaScript for the front end. I will continue to improve this site and implement new features and stretch goals.</p>
      <Link to="https://github.com/joemarney" className="github-link">
        <img src="/images/houseplant.png" />
      </Link>
    </main>
  );
}
