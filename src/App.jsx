import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import * as styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
