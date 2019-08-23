import { Injectable } from '@angular/core';
import {Personne} from './model/personne';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_LINK = 'http://localhost:3000/api/personnes';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  constructor(
    private http: HttpClient
  ) {}
  getFakePersonnes(): Personne[] {
    return [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 37, 77777),
      new Personne(2, 'med', 'abc', 'rien', 'cv.png', 27, 555),
      new Personne(3, 'med', 'abc', 'rien', 'cv.png', 27, 555)
    ];
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_LINK);
  }
  getPersonneById(id): Personne {
    return this.personnes.find(personne => personne.id == id);
  }

}
