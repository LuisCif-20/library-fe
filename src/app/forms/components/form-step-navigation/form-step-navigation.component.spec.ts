import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStepNavigationComponent } from './form-step-navigation.component';

describe('FormStepNavigationComponent', () => {
  let component: FormStepNavigationComponent;
  let fixture: ComponentFixture<FormStepNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormStepNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStepNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
