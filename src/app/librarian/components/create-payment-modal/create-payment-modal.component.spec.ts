import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaymentModalComponent } from './create-payment-modal.component';

describe('CreatePaymentModalComponent', () => {
  let component: CreatePaymentModalComponent;
  let fixture: ComponentFixture<CreatePaymentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePaymentModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
