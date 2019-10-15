import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTestComponentComponent } from './shared-test-component.component';

describe('SharedTestComponentComponent', () => {
  let component: SharedTestComponentComponent;
  let fixture: ComponentFixture<SharedTestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedTestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
