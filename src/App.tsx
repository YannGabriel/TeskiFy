
import { Layout } from "./components/Layout/layout";
import styles from './app.module.scss';

function App() {
  console.log(styles)
  document.body.classList.add(styles.body)
  return (
    <Layout/>
  );
}

export default App;
