import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeModalComponent } from './degree-modal.component';

describe('DegreeModalComponent', () => {
  let component: DegreeModalComponent;
  let fixture: ComponentFixture<DegreeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegreeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegreeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
