import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showLivreurBoard = false;
  showRestaurantBoard = false;
  nom?: string;
  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showLivreurBoard = this.roles.includes('ROLE_LIVREUR');
      this.showRestaurantBoard = this.roles.includes('ROLE_RESTAURANT');
      this.nom = user.nom;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.replace('/plats');
  }
}
