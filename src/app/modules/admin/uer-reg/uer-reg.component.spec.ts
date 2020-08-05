import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UerRegComponent } from './uer-reg.component';

describe('UerRegComponent', () => {
  let component: UerRegComponent;
  let fixture: ComponentFixture<UerRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UerRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UerRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
