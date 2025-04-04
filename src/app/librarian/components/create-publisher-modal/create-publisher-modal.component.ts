import { Component, inject, signal } from '@angular/core';
import { PublisherModalComponent } from "../publisher-modal/publisher-modal.component";
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';
import { PublishersStore } from '../../stores/publishers.store';
import { pipe, switchMap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

@Component({
  selector: 'create-publisher-modal',
  imports: [PublisherModalComponent, HoverStyleDirective],
  templateUrl: './create-publisher-modal.component.html',
  styles: ``
})
export class CreatePublisherModalComponent {

  public showModal = signal<boolean>(false);

  public readonly publishersStore = inject(PublishersStore);

  public getPublishers = rxMethod<void>(pipe(
    switchMap(() => this.publishersStore.getPublishers())
  ));

}
