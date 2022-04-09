import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-board-admin-test',
  templateUrl: './board-admin-test.component.html',
  styleUrls: ['./board-admin-test.component.css']
})
export class BoardAdminTestComponent implements OnInit {
  content?: string;

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateurService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
