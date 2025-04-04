import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextInputComponent } from 'src/app/forms/components/text-input/text-input.component';
import { Publisher, PublisherData } from 'src/app/library/interfaces/publisher.interface';
import { PublisherService } from 'src/app/library/services/publisher.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'publisher-modal',
  imports: [
    ReactiveFormsModule,
    TextInputComponent,
    ModalComponent
  ],
  templateUrl: './publisher-modal.component.html',
  styles: ``
})
export class PublisherModalComponent implements OnInit {

  public publisher = input<Publisher>();

  public closeModal = output<void>();
  public savePublisher = output<void>();

  private publisherService= inject(PublisherService);
  private alertService = inject(AlertService);
  private formBuilder = inject(NonNullableFormBuilder);

  public publisherForm = this.formBuilder.group({
    name: this.formBuilder.control('', [Validators.required]),
  });

  public isLoading = signal<boolean>(false);

  constructor() { }

  ngOnInit(): void {
    if (this.publisher()) {
      this.publisherForm.patchValue({
        name: this.publisher()!.name,
      });
      this.publisherForm.updateValueAndValidity();
    }
  }

  private onCreatePublisher(body: PublisherData): void {
    this.publisherService.createPublisher(body).subscribe({
      next: () => {
        this.savePublisher.emit();
        this.closeModal.emit();
        this.alertService.showAlert('Editorial creada con exito.', 'success');
      },
      error: (error: HttpErrorResponse) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest
          ? this.alertService.showAlert('Datos duplicados o invalidos.', 'error')
          : this.alertService.showAlert('Algo salio mal.', 'error');
      }
    });
  }

  private onUpdatePublisher(body: PublisherData): void {
    this.publisherService.updatePublisher(this.publisher()!.id, body).subscribe({
      next: () => {
        this.savePublisher.emit();
        this.closeModal.emit();
        this.alertService.showAlert('Editorial actualizado con exito.', 'success');
      },
      error: (error: HttpErrorResponse) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest
          ? this.alertService.showAlert('Datos duplicados o invalidos.', 'error')
          : this.alertService.showAlert('Algo salio mal.', 'error');
      }
    });
  }

  public onSavePublisher(): void {
    if (this.publisherForm.invalid) {
      this.publisherForm.markAllAsTouched();
      this.alertService.showAlert('Formulario invalido, porfavor llena los campos', 'error');
      return;
    }
    this.isLoading.set(true);
    const body: PublisherData = this.publisherForm.getRawValue();
    this.publisher()
      ? this.onUpdatePublisher(body)
      : this.onCreatePublisher(body);
    this.isLoading.set(false);
  }

}
