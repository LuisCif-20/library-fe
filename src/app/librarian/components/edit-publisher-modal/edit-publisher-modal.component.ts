import { Component, inject, input, signal } from '@angular/core';
import { PublisherModalComponent } from "../publisher-modal/publisher-modal.component";
import { Publisher } from 'src/app/library/interfaces/publisher.interface';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';
import { PublishersStore } from '../../stores/publishers.store';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';

@Component({
  selector: 'edit-publisher-modal',
  imports: [PublisherModalComponent, HoverStyleDirective],
  templateUrl: './edit-publisher-modal.component.html',
  styles: ``
})
export class EditPublisherModalComponent {

  public publisher = input.required<Publisher>();

  public readonly publishersStore = inject(PublishersStore);

  public getPublishers = rxMethod<void>(pipe(
    switchMap(() => this.publishersStore.getPublishers())
  ));

  public showModal = signal<boolean>(false);

}
