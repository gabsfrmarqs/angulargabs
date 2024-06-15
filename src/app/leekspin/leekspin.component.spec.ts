import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeekspinComponent } from './leekspin.component';

describe('LeekspinComponent', () => {
  let component: LeekspinComponent;
  let fixture: ComponentFixture<LeekspinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeekspinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeekspinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
