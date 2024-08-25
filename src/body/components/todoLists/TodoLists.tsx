import { useContext } from 'react';
import { AddTodoList, TodoList } from './components';
import css from './TodoLists.module.css';
import { TodolistContext } from '@/App/provioder';

export const TodoLists = () => {
  const { tasks, todoLists, setTasks, setTodolists } = useContext(TodolistContext);

  return (
    <>
      <AddTodoList setTodoLists={setTodolists} setTasks={setTasks} />
      <div className={css.container}>
        {todoLists.map((todolist) => {
          return (
            <TodoList
              key={todolist.id}
              title={todolist.title}
              tasks={tasks[todolist.id]}
              setTasks={setTasks}
              todolistId={todolist.id}
              setTodolists={setTodolists}
            />
          );
        })}
      </div>
    </>
  );
};
