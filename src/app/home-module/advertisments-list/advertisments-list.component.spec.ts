import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertismentsListComponent } from './advertisments-list.component';

describe('AdvertismentsListComponent', () => {
  let component: AdvertismentsListComponent;
  let fixture: ComponentFixture<AdvertismentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertismentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertismentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
