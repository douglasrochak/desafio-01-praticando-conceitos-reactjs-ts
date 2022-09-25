import styles from './TasksBody.module.css'

import { Task } from './Task'

export function TasksBody(){

  return (
    <div className={styles.tasksBody}>
      <div className={styles.taskInfo}>
        <strong>Tarefas criadas<span>5</span></strong>
        <strong>Concluídas<span>2 de 5</span></strong>
      </div>
      <div className={styles.tasksList}>
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )
}