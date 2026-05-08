import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicaPage } from './academica.page';

describe('AcademicaPage', () => {
  let component: AcademicaPage;
  let fixture: ComponentFixture<AcademicaPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(AcademicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

