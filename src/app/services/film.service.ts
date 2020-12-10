import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(
    private http: HttpClient
  ) {
    this.getFilm();
   }
  filmSubject = new Subject<any[]>();
  private films = [];

  private httpOptions = {
    headers:new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  emitFilmSubject() {
    this.filmSubject.next(this.films.slice());
  }

  setOnAir() {
    for (const film of this.films) {
      film.onAir = 'En Salle';
    }
    this.emitFilmSubject();
  }

  setOnBR() {
    for (const film of this.films) {
      film.onAir = 'Blue Ray';
    }
    this.emitFilmSubject();
  }


  switchOnAir(index: number) {
    this.films[index].onAir = 'En Salle';
    this.emitFilmSubject();
  }

  switchOnBR(index: number) {
    this.films[index].onAir = 'Blue Ray';
    this.emitFilmSubject();
  }

  getFilmById(id: number) {
    return this.http.get<any>('/api/movies/' + id);
  }

  addFilm(film: any) {
    this.http.post<any>('/api/movies', film, this.httpOptions).subscribe(res => {
      this.films.push(res);
      this.emitFilmSubject();
    });
  }

  getFilm() {
    this.http.get<any>('/api/movies').subscribe((res) =>{
      this.films = res;
      this.emitFilmSubject();
    });
  }

  modifFilm(film: any) {
    var index = this.films.findIndex(
      (filmToModif) => {
        if(filmToModif._id == film._id) {
          return true;
        }
      }
    )
    this.films.splice(index, 1, film);
    this.emitFilmSubject();
    return this.http.put<any>('/api/movies/' + film._id, film, this.httpOptions);
  }

  deleteFilm(id: any) {
    this.http.delete<any>('/api/movies/' + id).subscribe(res =>{
      var index = this.films.findIndex(
        (filmToDelete) => {
          if(filmToDelete._id == id) {
            return true;
          }
        }
      )
      this.films.splice(index, 1);
      this.emitFilmSubject();
    })
  }


}
