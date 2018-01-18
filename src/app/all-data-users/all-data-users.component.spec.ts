import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDataUsersComponent } from './all-data-users.component';

describe('AllDataUsersComponent', () => {
  let component: AllDataUsersComponent;
  let fixture: ComponentFixture<AllDataUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDataUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDataUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
