import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageToogleComponent } from './page-toogle.component';

describe('PageToogleComponent', () => {
  let component: PageToogleComponent;
  let fixture: ComponentFixture<PageToogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageToogleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
