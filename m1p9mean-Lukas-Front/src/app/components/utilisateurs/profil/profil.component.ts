import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  currentUtilisateur: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUtilisateur = this.token.getUser();
  }

}
