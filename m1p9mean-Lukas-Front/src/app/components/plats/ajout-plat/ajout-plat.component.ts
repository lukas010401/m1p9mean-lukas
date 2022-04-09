import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/plat.model';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-ajout-plat',
  templateUrl: './ajout-plat.component.html',
  styleUrls: ['./ajout-plat.component.css']
})
export class AjoutPlatComponent implements OnInit {
  plat: Plat = {
    nom: '',
    description: '',
    prix: 0.0,
    image_url:''
  };
  submitted = false;
  constructor(private platService : PlatService) { }

  ngOnInit(): void {
  }

  savePlat(): void {
    const data = {
      nom: this.plat.nom,
      description: this.plat.description,
      prix: this.plat.prix,
      image_url: this.plat.image_url
    };
    this.platService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newPlat(): void {
    this.submitted = false;
    this.plat = {
      nom: '',
      description: '',
      prix: 0.0,
      image_url:''
    };
  }
}
