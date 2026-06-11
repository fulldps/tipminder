import { AreaChart, CartesianGrid, Area, YAxis } from "recharts";

import * as styles from "./DetailsChart.module.css";

const DAYS_DATA = [
  {
    date: "07/06",
    amount: 0.6,
  },
  {
    date: "07/09",
    amount: 0.25,
  },
  {
    date: "01/06",
    amount: 0.19,
  },
  {
    date: "11/12",
    amount: 0.62,
  },
  {
    date: "02/08",
    amount: 0.67,
  },
  {
    date: "04/18",
    amount: 0.9,
  },
  {
    date: "01/16",
    amount: 0.6,
  },
  {
    date: "01/16",
    amount: 0.2,
  },
  {
    date: "01/16",
    amount: 0.7,
  },
  {
    date: "01/16",
    amount: 0.2,
  },
  {
    date: "01/16",
    amount: 0.9,
  },
  {
    date: "01/16",
    amount: 0.3,
  },
  {
    date: "01/16",
    amount: 0.1,
  },
  {
    date: "01/16",
    amount: 0.4,
  },
  {
    date: "01/16",
    amount: 0.1,
  },
  {
    date: "01/16",
    amount: 0.6,
  },
  {
    date: "01/16",
    amount: 0.3,
  },
];

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
      <div className={styles.chartBody}>
        <AreaChart className={styles.lineChart} responsive data={DAYS_DATA}>
          <CartesianGrid vertical={false} />
          <YAxis width="auto" />
          <Area type="monotone" dataKey="amount" />
        </AreaChart>
      </div>
    </div>
  );
}
