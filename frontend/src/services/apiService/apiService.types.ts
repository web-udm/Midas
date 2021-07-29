
export interface ICreateUserResponse extends ICreatedUser {
  status: number;
  message: string;
}

export interface ICreateUserParams {
  name: string;
  email: string;
  password: string;
}

interface ICreatedUser {
  id: string;
  name: string;
}
