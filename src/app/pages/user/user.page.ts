import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private authService: AuthService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async logout() {
    try {
      await this.authService.logout();
      // Redireccionar a la página de inicio de sesión o cualquier otra página deseada.
      this.navCtrl.navigateRoot('/login');
    } catch (error) {
      console.log('Error al cerrar sesión', error);
    }
  }
}

