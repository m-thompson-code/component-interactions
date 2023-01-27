import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBindsComponent } from './output-binds.component';

describe('OutputBindsComponent', () => {
  let component: OutputBindsComponent;
  let fixture: ComponentFixture<OutputBindsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputBindsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputBindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
