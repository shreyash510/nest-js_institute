// why we need to create this type outside the controller and services becouse ...
// user might send additional properties that you would not on a server but you not save on database

export type createStudent = {
  name: string;
  age: number;
  email: string;
};
