import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPostAdFormComponent } from './seller-post-ad-form.component';

describe('SellerPostAdFormComponent', () => {
  let component: SellerPostAdFormComponent;
  let fixture: ComponentFixture<SellerPostAdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerPostAdFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerPostAdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
