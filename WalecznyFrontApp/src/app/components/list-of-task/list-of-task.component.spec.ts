import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTaskComponent } from './list-of-task.component';

describe('ListOfTaskComponent', () => {
  let component: ListOfTaskComponent;
  let fixture: ComponentFixture<ListOfTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
