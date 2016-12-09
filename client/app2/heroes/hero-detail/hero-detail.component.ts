import {Component, Input,OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Params} from '@angular/router';
import { Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


import {HeroService} from '../shared/hero.service';
import {Hero} from '../shared/hero';
@Component({
	moduleId:module.id,

	selector: 'my-hero-detail',
	templateUrl:'hero-detail.component.html',
	styleUrls:['hero-detail.component.css']
	/*
	template: `
	  <div *ngIf="hero">
	    <h2>{{hero.name}} details!</h2>
	    <div><label>id: </label>{{hero.id}}</div>
	    <div>
	      <label>name: </label>
	      <input [(ngModel)]="hero.name" placeholder="name"/>
	    </div>
	    <button (click)="goBack()">Back</button>
	  </div>
	  `,*/
})
export class HeroDetailComponent implements OnInit{
	constructor(
		private heroService: HeroService,
		private route:ActivatedRoute,
		private location:Location

		){}
	ngOnInit(): void{
		this.route.params
		.switchMap((params: Params) => this.heroService.getHero(+params['id']))
		.subscribe(hero => this.hero = hero);
	}
	goBack():void{
		this.location.back();
	}
	save(): void {
  this.heroService.update(this.hero)
    .then(() => this.goBack());
}
	@Input()
	hero: Hero;
}