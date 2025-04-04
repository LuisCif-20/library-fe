import { ComponentFixture, TestBed } from '@angular/core/testing';

import BookByIdPageComponent from './book-by-id-page.component';

describe('BookByIdPageComponent', () => {
  let component: BookByIdPageComponent;
  let fixture: ComponentFixture<BookByIdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookByIdPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookByIdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
