import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DateInputComponent } from 'src/app/forms/components/date-input/date-input.component';
import { TextInputComponent } from 'src/app/forms/components/text-input/text-input.component';
import { Author, AuthorData } from 'src/app/library/interfaces/author.interface';
import { AuthorService } from 'src/app/library/services/author.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'author-modal',
  imports: [
    ReactiveFormsModule,
    ModalComponent,
    TextInputComponent,
    DateInputComponent
  ],
  templateUrl: './author-modal.component.html',
  styles: ``
})
export class AuthorModalComponent implements OnInit {

  public author = input<Author>();
  public closeModal = output<void>();
  public saveAuthor = output<void>();

  private authorService = inject(AuthorService);
  private alertService = inject(AlertService);
  private formBuilder = inject(NonNullableFormBuilder);

  public authorForm = this.formBuilder.group({
    name: this.formBuilder.control('', [Validators.required]),
    nationality: this.formBuilder.control('', [Validators.required]),
    birthDate: this.formBuilder.control('', [Validators.required])
  });

  public max = signal<string>('');
  public isLoading = signal<boolean>(false);

  constructor() {
    const current = new Date();
    current.setFullYear(current.getFullYear() - 12);
    this.max.set(current.toISOString().split('T').shift()!);
  }

  ngOnInit(): void {
    if (this.author()) {
      const { name, nationality, birthDate } = this.author()!;
      this.authorForm.patchValue({
        name,
        nationality,
        birthDate: birthDate.toString()
      });
      this.authorForm.updateValueAndValidity();
    }
  }

  private onCreateAuthor(body: AuthorData): void {
    this.authorService.createAuthor(body).subscribe({
      next: () => {
        this.saveAuthor.emit();
        this.closeModal.emit();
        this.alertService.showAlert('Author creado con exito.', 'success');
      },
      error: (error: HttpErrorResponse) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest
          ? this.alertService.showAlert('Datos duplicados o invalidos.', 'error')
          : this.alertService.showAlert('Algo salio mal.', 'error');
      }
    });
  }

  private onUpdateAuthor(body: AuthorData): void {
    this.authorService.updateAuthor(this.author()!.id, body).subscribe({
      next: () => {
        this.saveAuthor.emit();
        this.closeModal.emit();
        this.alertService.showAlert('Author actualizado con exito.', 'success');
      },
      error: (error: HttpErrorResponse) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest
          ? this.alertService.showAlert('Datos duplicados o invalidos.', 'error')
          : this.alertService.showAlert('Algo salio mal.', 'error');
      }
    });
  }

  public onSaveAuthor(): void {
    if (this.authorForm.invalid) {
      this.authorForm.markAllAsTouched();
      this.alertService.showAlert('Formulario invalido, porfavor llena los campos', 'error');
      return;
    }
    this.isLoading.set(true);
    const body: AuthorData = this.authorForm.getRawValue();
    this.author()
      ? this.onUpdateAuthor(body)
      : this.onCreateAuthor(body);
    this.isLoading.set(false);
  }

}
