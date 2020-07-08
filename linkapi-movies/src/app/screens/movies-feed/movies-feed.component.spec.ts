import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFeedComponent } from './movies-feed.component';

describe('MoviesFeedComponent', () => {
  let component: MoviesFeedComponent;
  let fixture: ComponentFixture<MoviesFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
