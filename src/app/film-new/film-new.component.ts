import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-new',
  templateUrl: './film-new.component.html',
  styleUrls: ['./film-new.component.css']
})
export class FilmNewComponent implements OnInit {

  newFilm: any;

  constructor(
    private Film: FilmService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newFilm = {
      title: null,
      affiche: null,
      onAir: null,
      synopsis: null,
      date: null
    };
  }

  onSaveFilm() {
    console.log('New Film', this.newFilm);
    this.Film.addFilm(this.newFilm);
    this.router.navigate(['/films']);
  }

}
