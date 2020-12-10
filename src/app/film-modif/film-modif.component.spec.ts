import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmModifComponent } from './film-modif.component';

describe('FilmModifComponent', () => {
  let component: FilmModifComponent;
  let fixture: ComponentFixture<FilmModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
