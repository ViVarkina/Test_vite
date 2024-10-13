export interface TaskResponse {
  id: string;
  is_completed: boolean;
  created_at: string;
  description: string;
  todolist_id: string;
  title: string;
  due_date: string;
}

export interface TaskTDO {
  id: string;
  isCompleted: boolean;
  createdAt: string;
  description: string;
  todolistId: string;
  title: string;
  dueDate: string;
}

export interface TaskUpdateRequest extends Partial<Pick<TaskTDO, 'isCompleted' | "title">>{}

// type TaskUpdate = Pick<TaskTDO, 'isCompleted' | "title">