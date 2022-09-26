import { InvalidEvent, ChangeEvent, useState, FormEvent } from 'react';

import styles from './TaskInput.module.css';
import { PlusCircle } from 'phosphor-react';

interface TaskInputProps {
  onCreateTask: (content: string) => void;
}

export function TaskInput({onCreateTask}: TaskInputProps) {
  const [inputText, setInputText] = useState('');

  const isInputText = inputText.length === 0;

  function handleInputTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setInputText(event.target.value)
  }

  function handleInputTextInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    onCreateTask(inputText);
    setInputText('');
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.taskInput}>
      <input name="task" required  onInvalid={handleInputTextInvalid} onChange={handleInputTextChange} value={inputText}  placeholder='Adicione uma nova tarefa' type="text" />
      <button type="submit" disabled={isInputText} >Criar <PlusCircle size={20} /></button>
    </form>
  )
}