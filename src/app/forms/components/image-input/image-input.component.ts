import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'image-input',
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './image-input.component.html',
  styles: ``
})
export class ImageInputComponent {

  public control = input.required<FormControl<Blob | null>>();
  public legend = input.required<string>();
  public placeholder = input<string>();
  public label = input<string>();
  public imageUrl = output<string>();

  constructor() { }

  get isInvalid(): boolean {
    return this.control().invalid && (this.control().touched || this.control().dirty);
  }

  public catchImage(event: Event): void {
    const fileList: FileList | null = (event.target as HTMLInputElement).files;
    if (fileList) {
      const file = fileList[0];
      if (file) {
        this.imageUrl.emit(URL.createObjectURL(file));
        this.control().setValue(file);
      }
    }
  }

}
