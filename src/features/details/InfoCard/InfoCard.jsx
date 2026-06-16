import * as styles from "./InfoCard.module.css";

export default function InfoCard({ title, info, linkTitle, link }) {
  return (
    <div className={styles.card}>
      <dl className={styles.cardDescription}>
        <dt>{title}</dt>
        <dd>{info}</dd>
      </dl>
      <a href={link}>{linkTitle}</a>
    </div>
  );
}
