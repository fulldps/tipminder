import GoToIcon from "./GoToIcon";
import LockIcon from "./LockIcon";
import { Link } from "react-router-dom";

import * as styles from "./Cards.module.css";

const MOCK_CARDS = [
  {
    id: "1",
    number: "1",
    cardNumber: "1234 1248 8987 1923",
    status: "Error",
    validTill: "12/12/2023",
  },
  {
    id: "2",
    number: "2",
    cardNumber: "1234 1248 8987 1923",
    status: "Active",
    validTill: "12/12/2023",
  },
  {
    id: "3",
    number: "3",
    cardNumber: "1234 1248 8987 1923",
    status: "Expired",
    validTill: "12/12/2023",
  },
  {
    id: "4",
    number: "4",
    cardNumber: "1234 1248 8987 1923",
    status: "Suspended",
    validTill: "12/12/2023",
  },
];

const STATUS_CLASS = {
  Error: styles.statusError,
  Active: styles.statusActive,
  Expired: styles.statusExpired,
  Suspended: styles.statusSuspended,
};

export default function Cards() {
  return (
    <section className={styles.cardSection} aria-labelledby="card-section">
      <h2 id="card-section">Cards</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Card number</th>
              <th scope="col">Status</th>
              <th scope="col">Valid till</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_CARDS.map((card) => (
              <tr key={card.id}>
                <td>{card.number}</td>
                <td>{card.cardNumber}</td>
                <td>
                  <span
                    className={`${styles.badge} ${STATUS_CLASS[card.status] ?? ""}`}
                  >
                    {card.status}
                  </span>
                </td>
                <td>{card.validTill}</td>
                <td>
                  <div className={styles.buttonWrapper}>
                    <Link
                      to={`/cards/${card.id}`}
                      aria-label="Go to card"
                      className={styles.link}
                    >
                      <GoToIcon />
                    </Link>
                    <button aria-label="Block card">
                      <LockIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
