import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersTableComponent } from './publishers-table.component';

describe('PublishersTableComponent', () => {
  let component: PublishersTableComponent;
  let fixture: ComponentFixture<PublishersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
