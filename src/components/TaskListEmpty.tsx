import styles from './TaskListEmpty.module.css'

import clipboardSvg from '../assets/clipboard.svg'
export function TaskListEmpty() {

  return (
    <div className={styles.taskListEmpty}>
      <div className={styles.taskListEmptyBox}>
        <img src={clipboardSvg} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}