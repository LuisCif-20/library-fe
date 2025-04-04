import { Component, inject, input, signal } from '@angular/core';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';
import { AuthorModalComponent } from '../author-modal/author-modal.component';
import { AuthorsStore } from '../../stores/authors.store';
import { pipe, switchMap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Author } from 'src/app/library/interfaces/author.interface';

@Component({
  selector: 'edit-author-modal',
  imports: [
    HoverStyleDirective,
    AuthorModalComponent
  ],
  templateUrl: './edit-author-modal.component.html',
  styles: ``
})
export class EditAuthorModalComponent {

  public author = input.required<Author>();

  private readonly authorsStore = inject(AuthorsStore);

  public getAuthors = rxMethod<void>(pipe(
    switchMap(() => this.authorsStore.getAuthors())
  ));

  public showModal = signal<boolean>(false);

}
