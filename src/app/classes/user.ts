import {Todo} from "./todo";

export interface User {
  email: string;
  password: string;
  todos: Todo[];
}
