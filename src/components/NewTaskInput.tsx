import styles from './NewTaskInput.module.css';
import { PlusCircle } from 'phosphor-react';

export function NewTaskInput() {

  return (
    <div className={styles.newTask}>
      <input placeholder='Adicione uma nova tarefa' type="text" />
      <button>Criar <PlusCircle size={20} /></button>
    </div>
  )
}