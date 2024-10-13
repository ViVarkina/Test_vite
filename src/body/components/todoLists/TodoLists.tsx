import { useEffect } from 'react';
import { AddTodoList, TodoList } from './components';
import css from './TodoLists.module.css';
import { RootState, useAppDispatch } from '@/App/rootStore';
import { getMyTodolist } from '@/entits/todolist';
import { useSelector } from 'react-redux';
import { getMyTask } from '@/entits';

export const TodoLists = () => {
  const dispatch = useAppDispatch();
  const { todoLists } = useSelector((state: RootState) => state.todolistStore);

  useEffect(() => {
    dispatch(getMyTodolist());
    dispatch(getMyTask());
  }, []);
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
