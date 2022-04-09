import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdminTestComponent } from './board-admin-test.component';

describe('BoardAdminTestComponent', () => {
  let component: BoardAdminTestComponent;
  let fixture: ComponentFixture<BoardAdminTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAdminTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAdminTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
