import css from '../todoList/TodoList.module.css';
import { useState } from 'react';
import { BaseButton, BaseInput } from '@/shared';
import { useAppDispatch } from '@/App/rootStore';
import { addTask } from '@/entits';

interface PropsType {
  todolistId: string;
}

export const AddTask = ({ todolistId }: PropsType) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>();
  const dispatch = useAppDispatch();

  const onClickTask = () => {
    dispatch(
      addTask({
        value,
        todolistId,
        successCallback: () => setValue(''),
        errorCallback: () => setError(true),
      })
    );
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
