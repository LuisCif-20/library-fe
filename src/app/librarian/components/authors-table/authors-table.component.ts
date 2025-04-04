import { Component, inject, input } from '@angular/core';
import { Author } from 'src/app/library/interfaces/author.interface';
import { AuthorsStore } from '../../stores/authors.store';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';
import { EditAuthorModalComponent } from "../edit-author-modal/edit-author-modal.component";
import { AuthorService } from 'src/app/library/services/author.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Router } from '@angular/router';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';

@Component({
  selector: 'authors-table',
  imports: [
    HoverStyleDirective,
    EditAuthorModalComponent
  ],
  templateUrl: './authors-table.component.html',
  styles: ``
})
export class AuthorsTableComponent {

  public authors = input<Author[]>([]);

  public readonly authorsStore = inject(AuthorsStore);
  private authorService = inject(AuthorService);
  private alertService = inject(AlertService);

  private getAuthors = rxMethod<void>(pipe(
    switchMap(() => this.authorsStore.getAuthors())
  ));


  constructor() { }

  public onDelete(id: string): void {
    this.authorService.deleteAuthor(id).subscribe({
      next: () => {
        this.alertService.showAlert('El autor fue eliminado.', 'success');
        this.getAuthors();
      },
      error: () => {
        this.alertService.showAlert('El autor no existe.', 'warning');
      }
    });
  }

}
