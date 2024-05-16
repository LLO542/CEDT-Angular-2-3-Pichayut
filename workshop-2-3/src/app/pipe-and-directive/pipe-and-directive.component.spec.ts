import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeAndDirectiveComponent } from './pipe-and-directive.component';

describe('PipeAndDirectiveComponent', () => {
  let component: PipeAndDirectiveComponent;
  let fixture: ComponentFixture<PipeAndDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeAndDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeAndDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
