import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import Details from "./components/Details/Details";

import * as styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.main}>
        <h1>Merchant agreement</h1>
        <Form />
        <Cards />
        <Details />
      </main>
      <Footer />
    </div>
  );
}
