import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Concept1Component } from './concept1.component';

describe('Concept1Component', () => {
  let component: Concept1Component;
  let fixture: ComponentFixture<Concept1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Concept1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Concept1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
