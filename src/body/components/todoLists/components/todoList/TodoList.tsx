import { FilterBlock } from '../fiterBlock/FilterBlock.tsx';
import { TasksList } from '../tasksList/TasksList.tsx';
import { AddTask } from '../addTask/AddTask.tsx';
import { Dispatch, SetStateAction, useState } from 'react';
import { ChangeTitle } from '../changeTitile/ChangeTitle.tsx';
import css from './TodoList.module.css';
import { DeleteTodolist } from '../deletTodolist/DeleteTodolist.tsx';
import { Task, TaskType, TodoListsType } from '@/type/todolistType.ts';

interface PropsType {
  title: string;
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<TaskType>>;
  todolistId: string;
  setTodolists: Dispatch<SetStateAction<TodoListsType[]>>;
}

export type FilterStateType = 'All' | 'Active' | 'Closed';
export const TodoList = ({ title, tasks, setTasks, todolistId, setTodolists }: PropsType) => {
  const [filterState, setFilterState] = useState<FilterStateType>('All');
  let filterTask: Task[] = [];

  if (filterState === 'All') {
    filterTask = tasks;
  } else if (filterState === 'Active') {
    filterTask = tasks.filter((task) => !task.isDone);
  } else if (filterState === 'Closed') {
    filterTask = tasks.filter((task) => task.isDone);
  }

  const onSaveTitleTdl = (value: string, onSuccesCallback: () => void) => {
    setTodolists((prevState) => {
      const newArr = prevState.map((tdl) =>
        tdl.id === todolistId ? { ...tdl, title: value } : tdl
      );
      return newArr;
    });
    onSuccesCallback();
  };

  return (
    <>
      <div className={css.container}>
        <ChangeTitle title={title} saveTitle={onSaveTitleTdl} />
        <DeleteTodolist setTasks={setTasks} todolistId={todolistId} setTodolists={setTodolists} />
        <AddTask setTasks={setTasks} todolistId={todolistId} />
        <TasksList setTasks={setTasks} filterTask={filterTask} todolistId={todolistId} />
        <FilterBlock setFilterState={setFilterState} filterState={filterState} />
      </div>
    </>
  );
};
