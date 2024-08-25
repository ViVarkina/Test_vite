import { useContext } from 'react';
import { AddTodoList, TodoList } from './components';
import css from './TodoLists.module.css';
import { TodolistContext } from '@/App/provioder';

export const TodoLists = () => {
  const { todoLists } = useContext(TodolistContext);

  return (
    <>
      <AddTodoList />
      <div className={css.container}>
        {todoLists.map((todolist) => {
          return <TodoList key={todolist.id} title={todolist.title} todolistId={todolist.id} />;
        })}
      </div>
    </>
  );
};
