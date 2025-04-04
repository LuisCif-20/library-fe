import { Component, computed, inject } from '@angular/core';
import { NgClass } from '@angular/common';

import { AlertService } from '../../services/alert.service';
import { ALERT_VARIANTS } from '../../interfaces/alert.interface';

@Component({
  selector: 'app-alert',
  imports: [
    NgClass
  ],
  templateUrl: './alert.component.html',
  styles: ``
})
export class AlertComponent {

  private alertService = inject(AlertService);

  public alert = computed(() => this.alertService.alert());

  public alertClass = computed(() => ALERT_VARIANTS[this.alert()!.type]);


}
