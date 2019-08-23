import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../model/personne';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  goDetailCv() {
    const link = ['cv', this.personne.id];
    this.router.navigate(link);
  }

}
