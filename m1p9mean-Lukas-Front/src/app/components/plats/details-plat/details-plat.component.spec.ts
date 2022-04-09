import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPlatComponent } from './details-plat.component';

describe('DetailsPlatComponent', () => {
  let component: DetailsPlatComponent;
  let fixture: ComponentFixture<DetailsPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
