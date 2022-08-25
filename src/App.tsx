import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { ShowTasks } from "./components/ShowTasks";

import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.appContainer}>
        <ShowTasks />
      </div>

    </div>
  );
}
