import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBayFormComponent } from './add-bay-form.component';

describe('AddBayFormComponent', () => {
  let component: AddBayFormComponent;
  let fixture: ComponentFixture<AddBayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
