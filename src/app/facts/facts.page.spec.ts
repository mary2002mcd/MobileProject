import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactsPage } from './facts.page';

describe('FactsPage', () => {
  let component: FactsPage;
  let fixture: ComponentFixture<FactsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
