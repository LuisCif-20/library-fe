import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDegreeModalComponent } from './create-degree-modal.component';

describe('CreateDegreeModalComponent', () => {
  let component: CreateDegreeModalComponent;
  let fixture: ComponentFixture<CreateDegreeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDegreeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDegreeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
