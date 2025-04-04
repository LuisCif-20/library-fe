import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePublisherModalComponent } from './create-publisher-modal.component';

describe('CreatePublisherModalComponent', () => {
  let component: CreatePublisherModalComponent;
  let fixture: ComponentFixture<CreatePublisherModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePublisherModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePublisherModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
