import { Injectable } from '@angular/core';
import {Personne} from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 37, 77777),
      new Personne(2, 'med', 'abc', 'rien', 'cv.png', 27, 555),
      new Personne(3, 'med', 'abc', 'rien', 'cv.png', 27, 555)
    ];
  }
  getPersonnes() {
    return this.personnes;
  }
  getPersonneById(id): Personne {
    return this.personnes.find(personne => personne.id == id);
  }
}
