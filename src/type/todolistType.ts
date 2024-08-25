export interface Task {
  id: string;
  task: string;
  isDone: boolean;
  todolistId: string;
}

export interface TodoListsType {
  id: string;
  title: string;
}

export interface TaskType {
  [key: string]: Task[];
}
