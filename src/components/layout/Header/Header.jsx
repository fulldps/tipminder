import { useState } from "react";
import { Link } from "react-router-dom";

import TipMinderIcon from "../../icons/TipMinderIcon";
import UserIcon from "../../icons/UserIcon";
import BurgerIcon from "../../icons/BurgerIcon";

import * as styles from "./Header.module.css";

const NAV_MENU_ITEMS = [
  { id: 0, title: "About", to: "#" },
  { id: 1, title: "General condition", to: "#" },
  { id: 2, title: "Price list", to: "#" },
  { id: 3, title: "FAQ", to: "#" },
  { id: 4, title: "Contacts", to: "#" },
  { id: 5, title: "Agreement", to: "/agreement" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/cards" className={styles.link}>
        <div className={styles.logo}>
          <TipMinderIcon />
          <div className={styles.title}>TipMinder</div>
        </div>
      </Link>
      <nav>
        <ul className={`${styles.ul} ${menuOpen ? styles.ulOpen : ""}`}>
          {NAV_MENU_ITEMS.map((i) => (
            <li className={styles.li} key={i.id}>
              <Link
                className={styles.a}
                to={i.to}
                onClick={() => setMenuOpen(false)}
              >
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <BurgerIcon />
        </button>
        <button type="button" className={styles.logoutButton}>
          <UserIcon />
          <span className={styles.divider} />
          <span className={styles.logoutText}>Log out</span>
        </button>
      </div>
    </header>
  );
}
