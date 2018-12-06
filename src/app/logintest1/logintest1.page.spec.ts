import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Logintest1Page } from './logintest1.page';

describe('Logintest1Page', () => {
  let component: Logintest1Page;
  let fixture: ComponentFixture<Logintest1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Logintest1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Logintest1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
