import { computed, Injectable, signal } from '@angular/core';

import { Alert, AlertVariant } from '../interfaces/alert.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private _alert = signal<Alert | null>(null);

  public alert = computed(() => this._alert());

  constructor() { }

  public showAlert(message: string, type: AlertVariant): void {
    const icon = type === "success" ? 'task_alt' : type;
    this._alert.set({ message, type, icon });
    setTimeout(() => {
      this._alert.set(null);
    }, 2500);
  }

}
