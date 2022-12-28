export interface RegisterForm {
  name: string;
  lastname: string;
  email?: string;
  phone: number;
  about?: string;
  password: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageUrl?: string | any;
  organization?: number;
  role?: number;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface changePassword {
  oldPassword: string;
  newPassword: string;
}

export interface organizationType {
  name: string;
  id: number;
}
