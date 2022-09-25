import { Header } from './components/Header';
import { NewTaskInput } from './components/NewTaskInput';
import { TasksBody } from './components/TasksBody';

import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskInput />
        <TasksBody />
      </div>
    </div>
  )
}
