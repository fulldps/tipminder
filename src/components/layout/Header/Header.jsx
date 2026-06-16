import TipMinderIcon from "../../icons/TipMinderIcon";
import UserIcon from "../../icons/UserIcon";

import * as styles from "./Header.module.css";
import { Link } from "react-router-dom";

const NAV_MENU_ITEMS = [
  { id: 0, title: "About", to: "#" },
  { id: 1, title: "General condition", to: "#" },
  { id: 2, title: "Price list", to: "#" },
  { id: 3, title: "FAQ", to: "#" },
  { id: 4, title: "Contacts", to: "#" },
  { id: 5, title: "Agreement", to: "/agreement" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/cards" className={styles.link}>
        <div className={styles.logo}>
          <TipMinderIcon />
          <div className={styles.title}>TipMinder</div>
        </div>
      </Link>
      <nav>
        <ul className={styles.ul}>
          {NAV_MENU_ITEMS.map((i) => (
            <li className={styles.li} key={i.id}>
              <Link className={styles.a} to={i.to}>
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <button type="button" className={styles.logoutButton}>
          <UserIcon />
          <span className={styles.divider} />
          <span className={styles.logoutText}>Log out</span>
        </button>
      </div>
    </header>
  );
}
