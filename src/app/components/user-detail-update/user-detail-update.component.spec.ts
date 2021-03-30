import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailUpdateComponent } from './user-detail-update.component';

describe('UserDetailUpdateComponent', () => {
  let component: UserDetailUpdateComponent;
  let fixture: ComponentFixture<UserDetailUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
