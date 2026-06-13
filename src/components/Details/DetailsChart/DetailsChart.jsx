import {
  AreaChart,
  CartesianGrid,
  Area,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

import * as styles from "./DetailsChart.module.css";
import { useState } from "react";

const DAYS_DATA = [
  {
    date: "01/06",
    amount: 0.6,
  },
  {
    date: "02/09",
    amount: 0.25,
  },
  {
    date: "03/06",
    amount: 0.19,
  },
  {
    date: "04/12",
    amount: 0.62,
  },
  {
    date: "05/08",
    amount: 0.67,
  },
  {
    date: "06/18",
    amount: 0.9,
  },
  {
    date: "07/16",
    amount: 0.6,
  },
  {
    date: "08/16",
    amount: 0.2,
  },
  {
    date: "09/16",
    amount: 0.7,
  },
  {
    date: "10/16",
    amount: 0.2,
  },
  {
    date: "11/16",
    amount: 0.9,
  },
  {
    date: "12/16",
    amount: 0.3,
  },
  {
    date: "12/17",
    amount: 0.1,
  },
  {
    date: "12/18",
    amount: 0.4,
  },
  {
    date: "12/19",
    amount: 0.1,
  },
  {
    date: "12/20",
    amount: 0.6,
  },
  {
    date: "12/22",
    amount: 0.3,
  },
];

const MONTH_DATA = [
  {
    month: "January",
    amount: 1000,
  },
  {
    month: "February",
    amount: 2000,
  },
  {
    month: "March",
    amount: 3000,
  },
  {
    month: "April",
    amount: 4000,
  },
  {
    month: "May",
    amount: 5000,
  },
  {
    month: "June",
    amount: 2000,
  },
  {
    month: "July",
    amount: 7000,
  },
  {
    month: "August",
    amount: 1000,
  },
  {
    month: "September",
    amount: 1500,
  },
  {
    month: "October",
    amount: 10000,
  },
  {
    month: "November",
    amount: 6000,
  },
  {
    month: "December",
    amount: 2000,
  },
];

function ChartTooltip({ active, payload }) {
  if (!active || !payload.length) return null;
  return <div className={styles.tooltip}>{payload[0].value + " $"}</div>;
}

function ChartLegend({ payload }) {
  return (
    <ul className={styles.legend}>
      {payload.map((entry) => (
        <li key={entry.value} className={styles.legendItem}>
          <span className={styles.legendDot} />
          <span className={styles.legendText}>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
}

export default function DetailsChart() {
  const [isDaysActive, setIsDaysActive] = useState(true);
  function handleClickDays() {
    setIsDaysActive(true);
  }

  function handleClickMonth() {
    setIsDaysActive(false);
  }

  return (
    <div className={styles.chartWrapper}>
      <div className={styles.chartHeader}>
        <h3>Current price</h3>
        <div className={styles.buttonWrapper}>
          <button
            type="button"
            aria-pressed={isDaysActive}
            onClick={handleClickDays}
          >
            Days
          </button>
          <button
            type="button"
            aria-pressed={!isDaysActive}
            onClick={handleClickMonth}
          >
            Month
          </button>
        </div>
      </div>
      <div className={styles.chartBody}>
        <AreaChart
          className={styles.lineChart}
          responsive
          data={isDaysActive ? DAYS_DATA : MONTH_DATA}
        >
          <defs>
            <linearGradient id="tipsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fb8f42" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 1]}
            tickCount={11}
            width="auto"
          />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#fb8f42"
            strokeWidth={3}
            activeDot={{ fill: "#fff", stroke: "#fb8f42" }}
            name="Amount of tips transferred"
            fill="url(#tipsGradient)"
          />
          <Tooltip stroke={{ color: "#fb8f42" }} content={<ChartTooltip />} />
          <Legend content={<ChartLegend />} />
        </AreaChart>
      </div>
    </div>
  );
}
