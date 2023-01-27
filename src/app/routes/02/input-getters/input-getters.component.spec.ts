import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGettersComponent } from './input-getters.component';

describe('InputGettersComponent', () => {
  let component: InputGettersComponent;
  let fixture: ComponentFixture<InputGettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputGettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputGettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
