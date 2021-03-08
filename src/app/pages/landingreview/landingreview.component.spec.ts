import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingreviewComponent } from './landingreview.component';

describe('LandingreviewComponent', () => {
  let component: LandingreviewComponent;
  let fixture: ComponentFixture<LandingreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
