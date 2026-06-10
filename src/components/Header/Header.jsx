import TipMinderIcon from "./TipMinderIcon";
import UserIcon from "./UserIcon";

import * as styles from "./Header.module.css";

const NAV_MENU_ITEMS = [
  { id: 0, title: "About" },
  { id: 1, title: "General condition" },
  { id: 2, title: "Price list" },
  { id: 3, title: "FAQ" },
  { id: 4, title: "Contacts" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <TipMinderIcon />
        <div className={styles.title}>TipMinder</div>
      </div>
      <nav>
        <ul className={styles.ul}>
          {NAV_MENU_ITEMS.map((i) => (
            <li className={styles.li} key={i.id}>
              <a className={styles.a} href="#">
                {i.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <button type="button" className={styles.logoutButton}>
          <UserIcon />
          <span className={styles.divider} />
          <span>Log out</span>
        </button>
      </div>
    </header>
  );
}
