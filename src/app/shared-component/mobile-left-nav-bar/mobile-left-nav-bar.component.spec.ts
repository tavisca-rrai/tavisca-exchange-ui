import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLeftNavBarComponent } from './mobile-left-nav-bar.component';

describe('MobileLeftNavBarComponent', () => {
  let component: MobileLeftNavBarComponent;
  let fixture: ComponentFixture<MobileLeftNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileLeftNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileLeftNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
