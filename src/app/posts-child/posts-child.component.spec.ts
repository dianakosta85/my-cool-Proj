import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsChildComponent } from './posts-child.component';

describe('PostsChildComponent', () => {
  let component: PostsChildComponent;
  let fixture: ComponentFixture<PostsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
