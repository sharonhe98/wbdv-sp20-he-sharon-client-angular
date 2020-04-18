import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFalseComponentComponent } from './true-false-component.component';

describe('TrueFalseComponentComponent', () => {
  let component: TrueFalseComponentComponent;
  let fixture: ComponentFixture<TrueFalseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueFalseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueFalseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
