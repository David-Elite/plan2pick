import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfavouriteComponent } from './allfavourite.component';

describe('AllfavouriteComponent', () => {
  let component: AllfavouriteComponent;
  let fixture: ComponentFixture<AllfavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllfavouriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllfavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
