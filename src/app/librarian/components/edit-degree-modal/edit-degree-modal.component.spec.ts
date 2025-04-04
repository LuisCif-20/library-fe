import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDegreeModalComponent } from './edit-degree-modal.component';

describe('EditDegreeModalComponent', () => {
  let component: EditDegreeModalComponent;
  let fixture: ComponentFixture<EditDegreeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDegreeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDegreeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
