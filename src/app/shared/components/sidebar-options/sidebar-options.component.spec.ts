import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOptionsComponent } from './sidebar-options.component';

describe('SidebarOptionsComponent', () => {
  let component: SidebarOptionsComponent;
  let fixture: ComponentFixture<SidebarOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
