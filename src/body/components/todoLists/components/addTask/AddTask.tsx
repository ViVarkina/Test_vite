import css from '../todoList/TodoList.module.css';
import { useContext, useState } from 'react';
import { BaseButton, BaseInput } from '@/shared';
import { TodolistContext } from '@/App/provioder';

interface PropsType {
  todolistId: string;
}

export const AddTask = ({ todolistId }: PropsType) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>();
  const { addTask } = useContext(TodolistContext);

  const onClickTask = () => {
    addTask(
      value,
      todolistId,
      ()=>setValue(''),
      ()=>setError(true),
    )
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
      <BaseButton onClick={onClickTask}>Add task</BaseButton>
    </div>
  );
};
