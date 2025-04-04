import { ComponentFixture, TestBed } from '@angular/core/testing';

import DegreesPageComponent from './degrees-page.component';

describe('DegreesPageComponent', () => {
  let component: DegreesPageComponent;
  let fixture: ComponentFixture<DegreesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegreesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegreesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
