import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Episode1Page } from './episode1.page';

describe('Episode1Page', () => {
  let component: Episode1Page;
  let fixture: ComponentFixture<Episode1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Episode1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
