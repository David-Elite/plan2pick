import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfavouritesComponent } from './allfavourites.component';

describe('AllfavouritesComponent', () => {
  let component: AllfavouritesComponent;
  let fixture: ComponentFixture<AllfavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllfavouritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllfavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
