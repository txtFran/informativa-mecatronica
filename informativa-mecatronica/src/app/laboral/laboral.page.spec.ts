import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaboralPage } from './laboral.page';

describe('LaboralPage', () => {
  let component: LaboralPage;
  let fixture: ComponentFixture<LaboralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
