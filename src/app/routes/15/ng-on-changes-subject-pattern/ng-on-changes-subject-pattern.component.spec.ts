import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChangesSubjectPatternComponent } from './ng-on-changes-subject-pattern.component';

describe('NgOnChangesSubjectPatternComponent', () => {
  let component: NgOnChangesSubjectPatternComponent;
  let fixture: ComponentFixture<NgOnChangesSubjectPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnChangesSubjectPatternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnChangesSubjectPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
