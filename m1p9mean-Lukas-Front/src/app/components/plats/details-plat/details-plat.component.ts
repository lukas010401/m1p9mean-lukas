import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plat } from 'src/app/models/plat.model';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-details-plat',
  templateUrl: './details-plat.component.html',
  styleUrls: ['./details-plat.component.css']
})
export class DetailsPlatComponent implements OnInit {
  currentPlat: Plat ={
    nom:'',
    description:'',
    prix: 0.0,
    image_url :''
  }
  constructor(private platService: PlatService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getPlat(this.route.snapshot.params.id);
  }

  getPlat(id: string): void {
    this.platService.get(id)
      .subscribe(
        data => {
          this.currentPlat = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
