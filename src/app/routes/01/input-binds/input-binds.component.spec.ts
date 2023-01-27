import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBindsComponent } from './input-binds.component';

describe('InputBindsComponent', () => {
  let component: InputBindsComponent;
  let fixture: ComponentFixture<InputBindsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBindsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
