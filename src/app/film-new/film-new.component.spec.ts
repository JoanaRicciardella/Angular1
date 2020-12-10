import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmNewComponent } from './film-new.component';

describe('FilmNewComponent', () => {
  let component: FilmNewComponent;
  let fixture: ComponentFixture<FilmNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
