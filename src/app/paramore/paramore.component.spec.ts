import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamoreComponent } from './paramore.component';

describe('ParamoreComponent', () => {
  let component: ParamoreComponent;
  let fixture: ComponentFixture<ParamoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParamoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
