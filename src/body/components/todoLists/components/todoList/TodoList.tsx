import { FilterBlock } from '../fiterBlock/FilterBlock.tsx';
import { TasksList } from '../tasksList/TasksList.tsx';
import { AddTask } from '../addTask/AddTask.tsx';
import { useContext, useState } from 'react';
import { ChangeTitle } from '../changeTitile/ChangeTitle.tsx';
import css from './TodoList.module.css';
import { DeleteTodolist } from '../deletTodolist/DeleteTodolist.tsx';
import { Task } from '@/type/todolistType.ts';
import { TodolistContext } from '@/App/provioder';

interface PropsType {
  title: string;
  todolistId: string;
}

export type FilterStateType = 'All' | 'Active' | 'Closed';
export const TodoList = ({ title, todolistId }: PropsType) => {
  const [filterState, setFilterState] = useState<FilterStateType>('All');
  const {tasksObj, onSaveTitleTdl } = useContext(TodolistContext);
  const tasks = tasksObj[todolistId];
  let filterTask: Task[] = [];

  if (filterState === 'All') {
    filterTask = tasks;
  } else if (filterState === 'Active') {
    filterTask = tasks.filter((task) => !task.isDone);
  } else if (filterState === 'Closed') {
    filterTask = tasks.filter((task) => task.isDone);
  }


  return (
    <>
      <div className={css.container}>
        <ChangeTitle title={title} saveTitle={(value, callBack)=>{onSaveTitleTdl(todolistId,value,callBack)}}/>
        <DeleteTodolist todolistId={todolistId} />
        <AddTask todolistId={todolistId} />
        <TasksList filterTask={filterTask} todolistId={todolistId} />
        <FilterBlock setFilterState={setFilterState} filterState={filterState} />
      </div>
    </>
  );
};
