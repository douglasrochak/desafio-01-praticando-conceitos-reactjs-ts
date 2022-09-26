import styles from './TaskInfo.module.css'

interface TaskInfoProps {
  tasksCount: number;
  tasksComplete: number;
}
  
export function TaskInfo({tasksCount, tasksComplete}: TaskInfoProps){

  return (
      <div className={styles.taskInfo}>
        <strong>Tarefas criadas<span>{tasksCount}</span></strong>
        <strong>Concluídas<span>{tasksComplete} de {tasksCount}</span></strong>
      </div>
  )
}