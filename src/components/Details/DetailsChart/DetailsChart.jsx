import * as styles from "./DetailsChart.module.css";

export default function DetailsChart() {
  return (
    <div className={styles.chartWrapper}>
      <div className={styles.chartHeader}>
        <h3>Current price</h3>
        <div className={styles.buttonWrapper}>
          <button type="button">Days</button>
          <button type="button">Month</button>
        </div>
      </div>
      <div className={styles.chartBody}></div>
    </div>
  );
}
