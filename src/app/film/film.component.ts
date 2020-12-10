import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input() filmName: string;
  @Input() filmOnAir: string;
  @Input() filmAffiche: string;
  @Input() synopsis: string;
  @Input() date: string;
  @Input() id: number;

  constructor(
    private Film: FilmService) { }

  ngOnInit() {
  
  }

  getOnAir() {
    return this.filmOnAir;
  }

  changeColor() {
    if (this.filmOnAir == 'Blue Ray') {
      return 'purple';
    } else if (this.filmOnAir == 'En Salle') {
      return 'red';
    } else {
      console.log('error: unexpected onAir value');
    }
  }

  removeFilm(id: any) {
    this.Film.deleteFilm(id);
  }

 
}
