import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Output() sendDataToFather = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendData() {
    this.sendDataToFather.emit(
      {
        message : 'hello Dad'
      }
    ) ;
  }

}
