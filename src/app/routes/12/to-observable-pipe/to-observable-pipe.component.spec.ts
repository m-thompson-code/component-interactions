import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToObservablePipeComponent } from './to-observable-pipe.component';

describe('ToObservablePipeComponent', () => {
  let component: ToObservablePipeComponent;
  let fixture: ComponentFixture<ToObservablePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToObservablePipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToObservablePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
