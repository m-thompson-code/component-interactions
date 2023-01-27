import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectComponent } from './dependency-inject.component';

describe('DependencyInjectComponent', () => {
  let component: DependencyInjectComponent;
  let fixture: ComponentFixture<DependencyInjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyInjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependencyInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
