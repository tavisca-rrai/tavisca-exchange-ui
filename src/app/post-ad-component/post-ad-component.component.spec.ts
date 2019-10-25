import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdComponentComponent } from './post-ad-component.component';




describe('PostAdComponentComponent', () => {
  let component: PostAdComponentComponent;
  let fixture: ComponentFixture<PostAdComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAdComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
