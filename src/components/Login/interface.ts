export interface ILogin {
  email: string;
  password: string;
}

export interface ISetErrors {
  emailError: string;
  passwordError: string;
  otherError?: string;
}