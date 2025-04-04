import { Component, computed, input } from '@angular/core';
import { Reserve } from '../../interfaces/reserve.interface';
import { environment } from '@envs/environment';

@Component({
  selector: 'app-reservation-card',
  imports: [],
  templateUrl: './reservation-card.component.html',
  styles: ``
})
export class ReservationCardComponent {

  public reserve = input.required<Reserve>();

  public src = computed(() => `${environment.AWS_URL}/${this.reserve().book.imageUrl}`)

}
