import { FormControl } from "@angular/forms";

export interface PersonalForm {
  name: FormControl<string>;
  cui: FormControl<string>;
  birthDate: FormControl<string>;
}

export interface AcademicForm {
  carnet: FormControl<string>;
  degreeId: FormControl<string>;
}

export interface AccountForm {
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}
