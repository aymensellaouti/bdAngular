import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  show: boolean;
  couleur = 'red';
  two = 'Bonjoru';

  constructor() { }

  ngOnInit() {
    this.show = true;
  }
  disable() {
    this.show = !this.show;
  }
  changeColor(valeur) {
    this.couleur = valeur;
  }

}
