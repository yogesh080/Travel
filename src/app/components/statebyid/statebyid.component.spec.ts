import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatebyidComponent } from './statebyid.component';

describe('StatebyidComponent', () => {
  let component: StatebyidComponent;
  let fixture: ComponentFixture<StatebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatebyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
