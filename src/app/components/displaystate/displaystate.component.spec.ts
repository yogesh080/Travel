import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaystateComponent } from './displaystate.component';

describe('DisplaystateComponent', () => {
  let component: DisplaystateComponent;
  let fixture: ComponentFixture<DisplaystateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaystateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaystateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
