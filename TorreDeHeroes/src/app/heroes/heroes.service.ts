import { Injectable } from '@angular/core';
import { Heroe } from './heroes.module';
import { Titulo } from './titulo/titulo.module';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes: Heroe [];
  private enemigo: Heroe [];
  private titulos: Titulo[];

  constructor() {
    this.titulos = [
      {
        id: 0,
        nombre: 'Tank'
      },
      {
        id: 1,
        nombre: 'DPS'
      },
      {
        id: 2,
        nombre: 'Heal'
      },
      {
        id: 3,
        nombre: 'Support'
      },
      {
        id: 4,
        nombre: 'Asesino'
      },
    ];
    this.heroes = [];
    this.enemigo = [];
  }

  getTitulos() {
    return this.titulos;
  }

  getTitulo(id: number) {
    return this.titulos[id].nombre;
  }

  getHeroes() {
    return this.heroes;
  }

  getEnemigo() {
    return this.enemigo;
  }

  getStats(heroe: Heroe) {
    heroe.nivel = heroe.nivel+1;
    heroe.vida = heroe.vida+2;
    const rnd = Math.floor(Math.random()*5);
    if(rnd==2){
      heroe.velocidad = heroe.velocidad+1;
    }else if(rnd==3){
      heroe.ataque = heroe.ataque+1;
    }else if(rnd==4){
      heroe.defensa = heroe.defensa+1;
    }
  }

  agregarHeroes(heroes: Heroe) {
    this.heroes.push(heroes);
    if(this.heroes.length==1 && this.enemigo.length==0){
      this.agregarEnemigo(this.nuevoEnemigo());
    }
  }

  agregarEnemigo(enemigo: Heroe) {
    this.enemigo.push(enemigo);
  }

  killHeroe(heroe: Heroe){
    const index = this.heroes.indexOf(heroe, 0);
    if (index > -1) {
      this.heroes.splice(index, 1);
    }
  }

  killEnemigo(enemigo: Heroe){
    const index = this.enemigo.indexOf(enemigo, 0);
    if (index > -1) {
      this.enemigo.splice(index, 1);
    }
    this.agregarEnemigo(this.nuevoEnemigo());
  }

  nuevoHeroe(): Heroe {
    return {
      id: this.heroes.length,
      nombre: '',
      titulo: 0,
      nivel: 1,
      imagen: '',
      vida: 10,
      velocidad: Math.floor(Math.random()*6),
      ataque: Math.floor(Math.random()*(9-3)+3),
      defensa: Math.floor(Math.random()*6),
    };
  }

  nuevoEnemigo(): Heroe {
    var imagenes = ["./assets/DarthVader.jpg", "./assets/voldemort.jpg", "./assets/Decepticon.jpg", "./assets/normanBates.jpg", "./assets/reydelanoche.jpg", "./assets/Goomba.jpg"];
    var nombreEnemigo = ["Darth Vader", "Lord Voldemort", "Decepticon", "Norman Bates", "El rey de la noche", "Goomba"];
    var rnd = Math.floor(Math.random()*6)
    return {
      id: this.heroes.length,
      nombre: nombreEnemigo[rnd],
      titulo: 4,
      nivel: 1,
      imagen: imagenes[rnd],
      vida: 10,
      velocidad: Math.floor(Math.random()*6),
      ataque: Math.floor(Math.random()*(9-3)+3),
      defensa: Math.floor(Math.random()*6),
    };
  }
}
