import { Component, OnChanges, OnInit } from '@angular/core';
import { HeroesService } from './../heroes.service';
import { Heroe } from '../heroes.module';
import { Titulo } from '../titulo/titulo.module';

@Component({
  selector: 'app-alta-heroes',
  templateUrl: './alta-heroes.component.html',
  styleUrls: ['./alta-heroes.component.css']
})
export class AltaHeroesComponent implements OnInit {

  heroe!: Heroe;
  enemigo!: Heroe;
  heroes!: Heroe[];
  enemigos!: Heroe[];
  titulos!: Titulo[];

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroe = this.heroesService.nuevoHeroe();
    this.titulos = this.heroesService.getTitulos();
    this.heroes = this.heroesService.getHeroes();
    this.enemigos = this.heroesService.getEnemigo();
  }

  nuevoHeroe(): void {
    this.heroesService.agregarHeroes(this.heroe);
    this.heroe = this.heroesService.nuevoHeroe();
    if(this.enemigos.length == 0) {
      this.enemigo = this.heroesService.nuevoEnemigo();
    }
  }

  selectFile(event: any){
    if(!event.target.files[0] || event.target.files[0].length == 0){
      alert("Elige foto");
      return;
    }

    var mimetype = event.target.files[0].type;

    if(mimetype.match(/image\/*/) == null){
      alert("Please only images");
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event) => {
      if(this.heroe !== undefined) {
        this.heroe.imagen = reader.result as string;
      }
    }
  }
}
