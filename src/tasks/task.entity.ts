/* eslint-disable prettier/prettier */

//Esta clase es el formato de lo que se enviara ala BBDD
export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
