import { Component,OnInit } from '@angular/core';
import { Router} from'@angular/router';

import {RegionService} from '../shared/region.service';


@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl:'home.component.html',

providers: [RegionService]
})
export class HomeComponent implements OnInit  {
  public rowsOnPage=10;
selectedRegion: any;
 regions =[];
  constructor(
    private router: Router,
    private regionService:RegionService){}
	ngOnInit():void{
    this.regions=[];
		this.getRegions();
	}
 name = 'Angular';
 title = 'Regions';

 getRegions():void{
   this.regionService.getRegions()
   .map(res =>res.json())
   .subscribe(regions => {this.regions = regions;console.log(this.regions);});

   //.then(regions=>{ this.regions = regions;console.log(regions)});

 }
gotoAddRegion():void{
  this.router.navigate(['/addregion']);
}
deleteRegion(i):void{
  this.regionService.delete(this.regions[i]._id)
    .map(res =>res.json())
    .subscribe(x =>{this.regions.splice(i,1);console.log(this.regions);});
  ;
}
editRegion(i){
  this.router.navigate(['/editregion/',this.regions[i]._id])
}

 /*
 onSelect(hero):void{
 	this.selectedHero = hero;
 }
 gotoDetail():void{
   this.router.navigate(['/detail',this.selectedHero.id]);
 }
 add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
}
delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}*/
  }
