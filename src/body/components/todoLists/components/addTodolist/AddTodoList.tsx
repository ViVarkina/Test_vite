import { useContext, useState } from 'react';
import { v4 as uuisv4 } from 'uuid';

import { BaseButton, BaseInput } from '@/shared';
import { TodoListsType } from '@/type';
import { TodolistContext } from '@/App/provioder';

export const AddTodoList = () => {
  const [value, setValue] = useState<string>('');
  const { setTodolists, setTasksObj: setTasks } = useContext(TodolistContext);

  const onClickAddTodolist = () => {
    const todoListId = uuisv4();
    const newTodoList: TodoListsType = {
      id: todoListId,
      title: value,
    };
    const newTask = {
      [todoListId]: [],
    };
    setTodolists((prevState) => [newTodoList, ...prevState]);
    setTasks((prevState) => {
      return { ...prevState, ...newTask };
    });
    setValue('');
  };

  return (
    <>
      <div>
        <BaseInput
          placeholder={'Add new todo'}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
        <BaseButton onClick={onClickAddTodolist}>+</BaseButton>
      </div>
    </>
  );
};
