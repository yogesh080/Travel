import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearByPlaceComponent } from './near-by-place.component';

describe('NearByPlaceComponent', () => {
  let component: NearByPlaceComponent;
  let fixture: ComponentFixture<NearByPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearByPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearByPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
