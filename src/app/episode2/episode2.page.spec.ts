import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Episode2Page } from './episode2.page';

describe('Episode2Page', () => {
  let component: Episode2Page;
  let fixture: ComponentFixture<Episode2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Episode2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
