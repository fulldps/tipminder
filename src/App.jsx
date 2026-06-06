import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import * as styles from "./App.module.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.main}>
        <h1>Merchant agreement</h1>
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
