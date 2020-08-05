import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroRegComponent } from './astro-reg.component';

describe('AstroRegComponent', () => {
  let component: AstroRegComponent;
  let fixture: ComponentFixture<AstroRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
