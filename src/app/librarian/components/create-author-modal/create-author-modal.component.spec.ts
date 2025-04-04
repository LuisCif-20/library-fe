import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuthorModalComponent } from './create-author-modal.component';

describe('CreateAuthorModalComponent', () => {
  let component: CreateAuthorModalComponent;
  let fixture: ComponentFixture<CreateAuthorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAuthorModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAuthorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
