import css from '../todoList/TodoList.module.css';
import { useContext, useState } from 'react';
import { v4 as uuisv4 } from 'uuid';
import { BaseButton, BaseInput } from '@/shared';
import { Task } from '@/type';
import { TodolistContext } from '@/App/provioder';

interface ProrsType {
  todolistId: string;
}

export const AddTask = ({ todolistId }: ProrsType) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>();
  const { setTasksObj: setTasks } = useContext(TodolistContext);

  const addTask = () => {
    if (value) {
      setTasks((prevState) => {
        const newTask: Task = { id: uuisv4(), task: value, isDone: false, todolistId };
        const tasks = prevState[todolistId];
        const newTasks = [newTask, ...tasks];
        return { ...prevState, ...{ [todolistId]: newTasks } };
      });
      setValue('');
    } else {
      setError(true);
    }
  };
  return (
    <div>
      <BaseInput
        className={error ? css.error : undefined}
        type={'text'}
        value={value}
        onChange={(e) => {
          if (error) {
            setError(false);
          }
          setValue(e.currentTarget.value);
        }}
      />
      <BaseButton onClick={addTask}>Add task</BaseButton>
    </div>
  );
};
