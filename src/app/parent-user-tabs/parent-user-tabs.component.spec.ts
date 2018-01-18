import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentUserTabsComponent } from './parent-user-tabs.component';

describe('ParentUserTabsComponent', () => {
  let component: ParentUserTabsComponent;
  let fixture: ComponentFixture<ParentUserTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentUserTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentUserTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
