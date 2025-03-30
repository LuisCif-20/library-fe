import { FormControl } from "@angular/forms";
import { AccountForm } from "src/app/forms/interfaces/form.interface";

export interface Login {
  email:    string;
  password: string;
}

export interface RecoveryForm extends Omit<AccountForm, "email"> {
  totp: FormControl<string>;
}

export interface UserAccount extends Login {
  name: string;
  birthDate: string;
  cui: string;
}

export interface Student {
  carnet: string;
  degreeId: string;
}

export interface Register {
  userAccount:  UserAccount;
  student: Student;
}

export interface AuthResponse {
  token:  string;
}

export type AuthPage = 'sign-in' | 'sign-up' | 'reset-password';
