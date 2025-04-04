import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPublisherModalComponent } from './edit-publisher-modal.component';

describe('EditPublisherModalComponent', () => {
  let component: EditPublisherModalComponent;
  let fixture: ComponentFixture<EditPublisherModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPublisherModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPublisherModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
