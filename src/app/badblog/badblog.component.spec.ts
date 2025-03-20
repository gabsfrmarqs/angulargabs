import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadblogComponent } from './badblog.component';

describe('BadblogComponent', () => {
  let component: BadblogComponent;
  let fixture: ComponentFixture<BadblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
