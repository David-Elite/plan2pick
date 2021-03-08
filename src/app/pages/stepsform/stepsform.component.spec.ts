import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsformComponent } from './stepsform.component';

describe('StepsformComponent', () => {
  let component: StepsformComponent;
  let fixture: ComponentFixture<StepsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
