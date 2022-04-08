import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/plat.model';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-liste-plat',
  templateUrl: './liste-plat.component.html',
  styleUrls: ['./liste-plat.component.css']
})
export class ListePlatComponent implements OnInit {
  plats?: Plat[];
  currentPlat?: Plat;
  currentIndex = -1;
  nom = '';

  constructor(private platService: PlatService) { }

  ngOnInit(): void {
    this.retrievePlats();
  }

  retrievePlats(): void {
    this.platService.getAll()
      .subscribe(
        data => {
          this.plats = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePlats();
    this.currentPlat = undefined;
    this.currentIndex = -1;
  }
  setActivePlat(plat: Plat, index: number): void {
    this.currentPlat = plat;
    this.currentIndex = index;
  }
  removeAllPlats(): void {
    this.platService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
  searchNom(): void {
    this.platService.findByNom(this.nom)
      .subscribe(
        data => {
          this.plats = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
