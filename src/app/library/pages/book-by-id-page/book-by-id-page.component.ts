import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../interfaces/book.interface';
import { CurrencyPipe } from '@angular/common';
import { environment } from '@envs/environment';
import { IsbnPipe } from '../../pipes/isbn.pipe';
import { AuthStore } from 'src/app/auth/stores/auth.store';
import { EditBookModalComponent } from '../../components/edit-book-modal/edit-book-modal.component';
import { BookService } from '../../services/book.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';
import { ReservationService } from '../../services/reservation.service';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-book-by-id-page',
  imports: [
    CurrencyPipe,
    IsbnPipe,
    EditBookModalComponent,
    HoverStyleDirective
  ],
  templateUrl: './book-by-id-page.component.html',
  styles: ``
})
export default class BookByIdPageComponent implements OnInit {

  private router = inject(Router);
  private alerService = inject(AlertService);
  private authStore = inject(AuthStore);
  private activatedRoute = inject(ActivatedRoute);
  private bookService = inject(BookService);
  private reservationService = inject(ReservationService);

  public book = signal<Book | null>(null);

  public imageUrl = computed(() => `${environment.AWS_URL}/${this.book()?.imageUrl}`);
  public role = computed(() => {
    const user = this.authStore.user();
    return user ? user.role.name : null;
  });

  constructor() { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: ({ book }) => this.book.set(book)
    })
  }

  public updateView(): void {
    this.bookService.getBookById(this.book()!.id).subscribe({
      next: (book) => this.book.set(book)
    });
  }

  public onDelete(): void {
    this.bookService.deleteBook(this.book()!.id).subscribe({
      next: () => {
        this.alerService.showAlert('El libro fue eliminado.', 'success');
        this.router.navigateByUrl('/library');
      },
      error: () => {
        this.alerService.showAlert('El libro no existe.', 'warning');
      }
    });
  }

  public onReserv(): void {
    this.reservationService.createReservation(this.book()!.id).subscribe({
      next: () => {
        this.alerService.showAlert('Tu reservacion se ha registrado.', 'success');
        this.router.navigateByUrl('/library');
      },
      error: (error: HttpErrorResponse) => {
        error.status === HttpStatusCode.NotFound
          ? this.alerService.showAlert('El libro no existe.', 'warning')
          : this.alerService.showAlert('Ya has reservado este libro.', 'info')
      }
    });
  }

}
