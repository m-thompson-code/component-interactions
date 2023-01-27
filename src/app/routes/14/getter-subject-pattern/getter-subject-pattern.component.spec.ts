import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetterSubjectPatternComponent } from './getter-subject-pattern.component';

describe('GetterSubjectPatternComponent', () => {
  let component: GetterSubjectPatternComponent;
  let fixture: ComponentFixture<GetterSubjectPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetterSubjectPatternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetterSubjectPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
