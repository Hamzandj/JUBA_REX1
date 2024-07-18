// General Info Types
export type User = {
  _id: string;
  email: string;
  firstname: string;
  lastname: string;
  isAdmin: boolean;
  password: string;
};

export type UserProfile = {
  sub: string;
  firstname: string;
  lastname: string;
  iat: number;
  exp: number;
};
