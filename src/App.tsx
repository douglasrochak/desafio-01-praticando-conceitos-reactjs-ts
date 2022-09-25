import { Header } from './components/Header';
import { NewTaskInput } from './components/NewTaskInput';
import { Task } from './components/Task'

import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskInput />
        <main className={styles.body}>
          <div className={styles.taskInfo}>
            <strong>Tarefas criadas<span>5</span></strong>
            <strong>Concluídas<span>2 de 5</span></strong>
          </div>
          <div className={styles.taskList}>
            <Task />
          </div>
        </main>
      </div>
    </div>
  )
}
