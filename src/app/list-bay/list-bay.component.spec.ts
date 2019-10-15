import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBayComponent } from './list-bay.component';

describe('ListBayComponent', () => {
  let component: ListBayComponent;
  let fixture: ComponentFixture<ListBayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
