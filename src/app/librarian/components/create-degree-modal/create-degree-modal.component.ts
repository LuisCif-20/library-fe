import { Component, inject, signal } from '@angular/core';
import { DegreesStore } from '../../stores/degrees.store';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { DegreeModalComponent } from '../degree-modal/degree-modal.component';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';

@Component({
  selector: 'create-degree-modal',
  imports: [
    HoverStyleDirective,
    DegreeModalComponent
  ],
  templateUrl: './create-degree-modal.component.html',
  styles: ``
})
export class CreateDegreeModalComponent {

  private readonly degreesStore = inject(DegreesStore);

  public getDegrees = rxMethod<void>(pipe(
    switchMap(() => this.degreesStore.getDegrees())
  ));

  public showModal = signal<boolean>(false);

}
