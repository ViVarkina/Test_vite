import { v4 as uuisv4 } from 'uuid';
import { TaskType, TodoListsType } from '@/type';

const todolistId1 = uuisv4();
const todolistId2 = uuisv4();

export const initialTodolists: TodoListsType[] = [
  { id: todolistId1, title: 'Sheet 1' },
  { id: todolistId2, title: 'Sheet 2' },
];

export const initialTasks: TaskType = {
  [todolistId1]: [
    { id: uuisv4(), task: 'HTML', isDone: true, todolistId: todolistId1 },
    { id: uuisv4(), task: 'Css', isDone: true, todolistId: todolistId1 },
    { id: uuisv4(), task: 'React', isDone: false, todolistId: todolistId1 },
  ],
  [todolistId2]: [
    { id: uuisv4(), task: 'Redux', isDone: false, todolistId: todolistId2 },
    { id: uuisv4(), task: 'ReduxToolKit', isDone: false, todolistId: todolistId2 },
    { id: uuisv4(), task: 'Axios', isDone: false, todolistId: todolistId2 },
    { id: uuisv4(), task: 'AntD', isDone: false, todolistId: todolistId2 },
  ],
};
