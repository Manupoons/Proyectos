import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroes.module';
import { Titulo } from '../titulo/titulo.module';
import { HeroesService } from './../heroes.service';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css']
})
export class ListadoHeroesComponent implements OnInit{

  heroes!: Heroe[];
  enemigos!: Heroe[];
  titulos!: Titulo[];

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    this.enemigos = this.heroesService.getEnemigo();
    this.titulos = this.heroesService.getTitulos();
  }

  masStat(heroe: Heroe) {
    this.heroesService.getStats(heroe);
  }

}
