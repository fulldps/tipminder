import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import * as styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";

export default function App() {
  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.main}>
        <h1>Merchant agreement</h1>
        <Form />
        <Cards />
      </main>
      <Footer />
    </div>
  );
}
