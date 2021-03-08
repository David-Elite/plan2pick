import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationformComponent } from './applicationform.component';

describe('ApplicationformComponent', () => {
  let component: ApplicationformComponent;
  let fixture: ComponentFixture<ApplicationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
