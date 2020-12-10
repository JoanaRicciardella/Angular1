import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {FilmService} from '../services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit, OnDestroy {
  title = 'first-project';
  films: any = [];

  filmSubscription: Subscription;

  constructor(
    private Film: FilmService
  ) { }

  ngOnInit() {
    this.filmSubscription = this.Film.filmSubject.subscribe((value)=>{
      this.films = value;
    })
    this.Film.emitFilmSubject();
  }

  ngOnDestroy() {
    this.filmSubscription.unsubscribe();
  }

}

