import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../model/personne';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor(
    private cvService: CvService
  ) { }
  @Output() itemDataEvent = new EventEmitter();
  ngOnInit() {
    this.cvService.getPersonnes().subscribe(
      (personnes) => {
        this.personnes = personnes;
      },
      (error) => {
        this.personnes = this.cvService.getFakePersonnes();
        alert('Fake Data please contact admin');
      }
    );
  }
  treatItemData(personne: Personne) {
    this.itemDataEvent.emit(
      personne
    );
  }

}
