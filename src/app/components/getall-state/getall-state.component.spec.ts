import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallStateComponent } from './getall-state.component';

describe('GetallStateComponent', () => {
  let component: GetallStateComponent;
  let fixture: ComponentFixture<GetallStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
