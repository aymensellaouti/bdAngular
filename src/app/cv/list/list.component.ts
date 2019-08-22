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
    this.personnes = this.cvService.getPersonnes();
  }
  treatItemData(personne: Personne) {
    this.itemDataEvent.emit(
      personne
    );
  }

}
