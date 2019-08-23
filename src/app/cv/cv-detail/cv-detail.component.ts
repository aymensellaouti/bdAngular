import { Component, OnInit } from '@angular/core';
import {Personne} from '../model/personne';
import {ActivatedRoute, Router} from '@angular/router';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        const personne = this.cvService.getPersonneById(params['id']);
        if (personne) {
          this.personne = this.cvService.getPersonneById(params['id']);
        } else {
          const link = ['cv'];
          this.router.navigate(link);
        }
      }
    );
  }

}
