import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFiltersModalComponent } from './book-filters-modal.component';

describe('BookFiltersModalComponent', () => {
  let component: BookFiltersModalComponent;
  let fixture: ComponentFixture<BookFiltersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookFiltersModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookFiltersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
