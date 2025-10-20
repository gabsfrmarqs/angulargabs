import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetoComponent } from './teto.component';

describe('TetoComponent', () => {
  let component: TetoComponent;
  let fixture: ComponentFixture<TetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
