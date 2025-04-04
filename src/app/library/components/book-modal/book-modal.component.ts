import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { Book, CreateBook, UpdateBook } from '../../interfaces/book.interface';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from "../../../shared/components/modal/modal.component";
import { SelectInputComponent } from "../../../forms/components/select-input/select-input.component";
import { ActivatedRoute } from '@angular/router';
import { SelectOption } from 'src/app/forms/interfaces/select-input.interface';
import { TextInputComponent } from "../../../forms/components/text-input/text-input.component";
import { DateInputComponent } from "../../../forms/components/date-input/date-input.component";
import { ImageInputComponent } from 'src/app/forms/components/image-input/image-input.component';
import { environment } from '@envs/environment';
import { codePattern, ISBNPattern } from 'src/app/forms/validators/patterns';
import { BookService } from '../../services/book.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'book-modal',
  imports: [
    ReactiveFormsModule,
    ModalComponent,
    SelectInputComponent,
    TextInputComponent,
    DateInputComponent,
    ImageInputComponent
  ],
  templateUrl: './book-modal.component.html',
  styles: ``
})
export class BookModalComponent implements OnInit {

  private alertService = inject(AlertService);
  private bookService = inject(BookService);

  public book = input<Book | null>(null);
  public closeModal = output<void>();
  public saveBook = output<void>();

  private activatedRoute = inject(ActivatedRoute);
  private formBuilder = inject(NonNullableFormBuilder);

  public authors = signal<SelectOption[]>([]);
  public publishers = signal<SelectOption[]>([]);
  public imageUrl = signal<string | null>(null);
  public isLoading = signal<boolean>(false);

  public bookForm = this.formBuilder.group({
    authorId: this.formBuilder.control('', [Validators.required]),
    publisherId: this.formBuilder.control('', [Validators.required]),
    title: this.formBuilder.control('', [Validators.required]),
    code: this.formBuilder.control('', [Validators.required, Validators.pattern(codePattern)]),
    isbn: this.formBuilder.control('', [Validators.required, Validators.pattern(ISBNPattern)]),
    quantity: this.formBuilder.control(1, [Validators.required, Validators.min(1), Validators.max(50)]),
    publicationDate: this.formBuilder.control('', [Validators.required]),
    price: this.formBuilder.control(1.00, [Validators.required, Validators.min(0), Validators.max(1000)]),
    imageFile: this.formBuilder.control<Blob | null>(null, [Validators.required])
  });
  public max = signal<string>((new Date()).toISOString().split('T').shift()!);

  constructor() { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: ({authors, publishers}) => {
        this.authors.set(authors);
        this.publishers.set(publishers);
        if (this.book()) {
          const { title, code, isbn, quantity, publicationDate, price, imageUrl, author, publisher } = this.book()!;
          this.bookForm.controls.imageFile.clearValidators();
          this.bookForm.patchValue({
            authorId: author.id,
            publisherId: publisher.id,
            title,
            code,
            isbn,
            quantity,
            publicationDate: publicationDate.toString(),
            price
          });
          this.imageUrl.set(`${environment.AWS_URL}/${imageUrl}`);
          this.bookForm.updateValueAndValidity();
        }
      }
    });
  }

  private onCreatebook(): void {
    const body: CreateBook = this.bookForm.getRawValue();
    this.bookService.createBook(body).subscribe({
      next: () => {
        this.saveBook.emit();
        this.closeModal.emit();
        this.alertService.showAlert('Libro creado correctamente.', 'success');
      },
      error: (error: HttpErrorResponse) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest
          ? this.alertService.showAlert('Datos duplicados o invalidos.', 'error')
          : this.alertService.showAlert('Algo salio mal.', 'error');
      }
    })
  }

  private onUpdateBook(): void {
    const body: UpdateBook = this.bookForm.getRawValue();
    this.bookService.updateBook(this.book()!.id, body).subscribe({
      next: () => {
        this.saveBook.emit();
        this.closeModal.emit();
        this.alertService.showAlert('Libro actualizado correctamente.', 'success');
      },
      error: (error: HttpErrorResponse) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest
          ? this.alertService.showAlert('Datos duplicados o invalidos.', 'error')
          : this.alertService.showAlert('Algo salio mal.', 'error');
      }
    })
  }

  public onSaveBook(): void {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      this.alertService.showAlert('Formulario invalido, por favor llena los campos.', 'error');
      return;
    }
    this.isLoading.set(true);
    this.book()
      ? this.onUpdateBook()
      : this.onCreatebook();
    this.isLoading.set(false);
  }

}
