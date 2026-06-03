import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import * as styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.div}>
        <Form />
      </div>
    </>
  );
}

export default App;
