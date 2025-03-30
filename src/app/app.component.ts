import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ThemeService } from './theme/services/theme.service';
import { AlertComponent } from "./shared/components/alert/alert.component";
import { PersonalFormComponent } from './forms/components/personal-form/personal-form.component';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { PersonalForm } from './forms/interfaces/form.interface';
import { cuiPattern, namePattern } from './forms/validators/patterns';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AlertComponent,
    PersonalFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private themeService = inject(ThemeService);

  private formBuilder = inject(NonNullableFormBuilder);

  public personalForm = this.formBuilder.group<PersonalForm>({
    name: this.formBuilder.control('', [Validators.required, Validators.minLength(1), Validators.pattern(namePattern)]),
    cui: this.formBuilder.control('', [Validators.required]),
    birthDate: this.formBuilder.control('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
    this.themeService.loadUserTheme();
  }

  xd(): void {
    this.personalForm.markAllAsTouched();
  }

}
