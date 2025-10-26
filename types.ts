
export enum Priority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

export enum Status {
  Pending = 'Pending',
  Completed = 'Completed',
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: Priority;
  subject: string;
  status: Status;
}

export interface User {
  id: string;
  name: string;
  email: string;
  rollNo?: string;
  course?: string;
}
