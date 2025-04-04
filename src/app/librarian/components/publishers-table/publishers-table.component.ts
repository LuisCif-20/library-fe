import { Component, inject, input } from '@angular/core';
import { Publisher } from 'src/app/library/interfaces/publisher.interface';
import { PublishersStore } from '../../stores/publishers.store';
import { PublisherService } from 'src/app/library/services/publisher.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { EditPublisherModalComponent } from "../edit-publisher-modal/edit-publisher-modal.component";
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';

@Component({
  selector: 'publishers-table',
  imports: [EditPublisherModalComponent, HoverStyleDirective],
  templateUrl: './publishers-table.component.html',
  styles: ``
})
export class PublishersTableComponent {

  public publishers = input<Publisher[]>([]);

  public readonly publishersStore = inject(PublishersStore);
  private publisherService = inject(PublisherService);
  private alertService = inject(AlertService);

  private getPublishers = rxMethod<void>(pipe(
    switchMap(() => this.publishersStore.getPublishers())
  ));

  constructor() { }

  public onDelete(id: string): void {
    this.publisherService.deletePublisher(id).subscribe({
      next: () => {
        this.alertService.showAlert('La editorial fue eliminada.', 'success');
        this.getPublishers();
      },
      error: () => {
        this.alertService.showAlert('La editorial no existe.', 'warning');
      }
    });
  }

}
