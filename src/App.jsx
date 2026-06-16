import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import * as styles from "./App.module.css";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
