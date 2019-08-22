import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne: Personne;
  @Output() itemDataEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendItemData() {
    console.log(this.personne)
    this.itemDataEvent.emit(
      this.personne
    );
  }

}
