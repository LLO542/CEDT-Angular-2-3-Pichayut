import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardShowDataComponent } from './dashboard-show-data.component';

describe('DashboardShowDataComponent', () => {
  let component: DashboardShowDataComponent;
  let fixture: ComponentFixture<DashboardShowDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardShowDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardShowDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
