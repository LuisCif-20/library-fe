import { Component, inject, input, signal } from '@angular/core';
import { Degree } from 'src/app/shared/interfaces/degree.interface';
import { DegreesStore } from '../../stores/degrees.store';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { DegreeModalComponent } from "../degree-modal/degree-modal.component";
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';

@Component({
  selector: 'edit-degree-modal',
  imports: [DegreeModalComponent, HoverStyleDirective],
  templateUrl: './edit-degree-modal.component.html',
  styles: ``
})
export class EditDegreeModalComponent {

  public degree = input.required<Degree>();

  private readonly degreesStore = inject(DegreesStore);

  public getDegrees = rxMethod<void>(pipe(
    switchMap(() => this.degreesStore.getDegrees())
  ));

  public showModal = signal<boolean>(false);

}
