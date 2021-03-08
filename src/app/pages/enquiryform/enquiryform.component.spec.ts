import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryformComponent } from './enquiryform.component';

describe('EnquiryformComponent', () => {
  let component: EnquiryformComponent;
  let fixture: ComponentFixture<EnquiryformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
