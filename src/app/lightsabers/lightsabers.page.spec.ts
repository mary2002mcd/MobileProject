import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LightsabersPage } from './lightsabers.page';

describe('LightsabersPage', () => {
  let component: LightsabersPage;
  let fixture: ComponentFixture<LightsabersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LightsabersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
