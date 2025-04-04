import { Component, inject, signal } from '@angular/core';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';
import { AuthorModalComponent } from '../author-modal/author-modal.component';
import { AuthorsStore } from '../../stores/authors.store';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';

@Component({
  selector: 'create-author-modal',
  imports: [
    HoverStyleDirective,
    AuthorModalComponent
  ],
  templateUrl: './create-author-modal.component.html',
  styles: ``
})
export class CreateAuthorModalComponent {

  private readonly authorsStore = inject(AuthorsStore);

  public getAuthors = rxMethod<void>(pipe(
    switchMap(() => this.authorsStore.getAuthors())
  ));

  public showModal = signal<boolean>(false);

}
