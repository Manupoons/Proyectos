import { Component } from '@angular/core';
import { Heroe } from '../heroes.module';
import { HeroesService } from './../heroes.service';

@Component({
  selector: 'app-combate-heroes',
  templateUrl: './combate-heroes.component.html',
  styleUrls: ['./combate-heroes.component.css']
})
export class CombateHeroesComponent {

  idA: number;
  idB: number;
  heroeA!: Heroe;
  heroeB!: Heroe;
  heroes!: Heroe[];
  enemigos!: Heroe[];
  
  private heroesService: HeroesService

  constructor(hs: HeroesService) { 
    this.heroesService = hs;
    this.idA=0;
    this.idB=0;
  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    this.enemigos = this.heroesService.getEnemigo();
  }

  pelea() {
    this.heroeA = this.heroes[this.idA];
    this.heroeB = this.enemigos[this.idB];
    var salir = false;
    var cantidad = 20;
    // FIGHT!!
    while(cantidad>0 && !salir){
      if(this.heroeA.velocidad>=this.heroeB.velocidad){
        this.heroeB.vida=this.heroeB.vida-(this.heroeA.ataque-this.heroeB.defensa)
        if(this.heroeB.vida>0)
          this.heroeA.vida=this.heroeA.vida-(this.heroeB.ataque-this.heroeA.defensa)

      }
      else{
        this.heroeA.vida=this.heroeA.vida-(this.heroeB.ataque-this.heroeA.defensa)
        if(this.heroeA.vida>0)
          this.heroeB.vida=this.heroeB.vida-(this.heroeA.ataque-this.heroeB.defensa)

      }
      if(this.heroeA.vida<=0 || this.heroeB.vida<=0) salir=true;
      cantidad--;
    }
    //Comprobando victorias
    //GANA A
    if(this.heroeB.vida<=0){
      this.heroesService.getStats(this.heroeA)
      this.heroesService.killEnemigo(this.heroeB)
    }
    else if(this.heroeA.vida<=0){
      this.heroesService.getStats(this.heroeB)
      this.heroesService.killHeroe(this.heroeA)
    }
  }
}
