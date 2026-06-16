import GoToIcon from "./GoToIcon";
import LockIcon from "./LockIcon";
import { Link } from "react-router-dom";

import * as styles from "./Cards.module.css";
import { useGetUsersQuery } from "../../app/api.js";
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "../../app/filterSlice.js";

const STATUS_CLASS = {
  Error: styles.statusError,
  Active: styles.statusActive,
  Expired: styles.statusExpired,
  Suspended: styles.statusSuspended,
};

const STATUSES = Object.keys(STATUS_CLASS);

const FILTERS = ["All", ...STATUSES];

const getStatus = (id) => STATUSES[id % STATUSES.length];

export default function Cards() {
  const { data, isLoading, error } = useGetUsersQuery();
  const dispatch = useDispatch();
  const selectedStatus = useSelector((state) => state.filter.selectedStatus);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  const visibleUsers = data.filter((user) => {
    if (selectedStatus === "All") return true;
    return getStatus(user.id) === selectedStatus;
  });

  return (
    <section className={styles.cardSection} aria-labelledby="card-section">
      <h2 id="card-section">Cards</h2>
      <div className={styles.filterWrapper}>
        {FILTERS.map((status) => (
          <button
            className={styles.filterButton}
            key={status}
            onClick={() => dispatch(setStatus(status))}
            aria-pressed={status === selectedStatus}
          >
            {status}
          </button>
        ))}
      </div>
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
            {visibleUsers.map((user) => {
              const status = getStatus(user.id);
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.bank.cardNumber}</td>
                  <td>
                    <span className={`${styles.badge} ${STATUS_CLASS[status]}`}>
                      {status}
                    </span>
                  </td>
                  <td>{user.bank.cardExpire}</td>
                  <td>
                    <div className={styles.buttonWrapper}>
                      <Link
                        to={`/cards/${user.id}`}
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
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
