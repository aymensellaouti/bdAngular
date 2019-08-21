import { Component, OnInit } from '@angular/core';
import {Personne} from '../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 37, 77777),
      new Personne(1, 'med', 'abc', 'rien', 'test.jpg', 27, 555)
    ];
  }

}
