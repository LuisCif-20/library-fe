import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [
    NgClass
  ],
  templateUrl: './modal.component.html',
  styles: ``
})
export class ModalComponent {

  public fullWidth = input<boolean>(false);

  public fullHeight = input<boolean>(false);

  public closeModal = output<void>();

}
