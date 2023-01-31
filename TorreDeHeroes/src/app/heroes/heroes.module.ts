import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesService } from './heroes.service';
import { AltaHeroesComponent } from './alta-heroes/alta-heroes.component';
import { ListadoHeroesComponent } from './listado-heroes/listado-heroes.component';
import { CombateHeroesComponent } from './combate-heroes/combate-heroes.component';


@NgModule({
  declarations: [
    AltaHeroesComponent,
    ListadoHeroesComponent,
    CombateHeroesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    HeroesService
  ],
  exports: [
    AltaHeroesComponent,
    ListadoHeroesComponent,
    CombateHeroesComponent
  ]
})
export class HeroesModule { }

export interface Heroe{
  id: number;
  nombre: string;
  titulo: number;
  nivel: number;
  imagen: string;
  vida: number;
  velocidad: number;
  ataque: number;
  defensa: number;
}
