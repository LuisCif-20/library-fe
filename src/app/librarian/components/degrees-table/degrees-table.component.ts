import { Component, inject, input } from '@angular/core';
import { Degree } from 'src/app/shared/interfaces/degree.interface';
import { DegreesStore } from '../../stores/degrees.store';
import { DegreeService } from 'src/app/shared/services/degree.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';
import { EditDegreeModalComponent } from '../edit-degree-modal/edit-degree-modal.component';

@Component({
  selector: 'degrees-table',
  imports: [
    HoverStyleDirective,
    EditDegreeModalComponent
  ],
  templateUrl: './degrees-table.component.html',
  styles: ``
})
export class DegreesTableComponent {

  public degrees = input<Degree[]>([]);

  public readonly degreesStore = inject(DegreesStore);
  private degreeService = inject(DegreeService);
  private alertService = inject(AlertService);

  private getDegrees = rxMethod<void>(pipe(
    switchMap(() => this.degreesStore.getDegrees())
  ));

  constructor() { }

  public onDelete(id: string): void {
    this.degreeService.deleteDegree(id).subscribe({
      next: () => {
        this.alertService.showAlert('La carrera fue eliminada.', 'success');
        this.getDegrees();
      },
      error: () => {
        this.alertService.showAlert('La carrera no existe.', 'warning');
      }
    });
  }

}
