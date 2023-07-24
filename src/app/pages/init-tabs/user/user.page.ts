import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  
  constructor(private auth: AuthService,private router:Router){
    
  }

  logout(){
    this.auth.logout().then(() => this.router.navigate(['/']))
    .catch((e) => console.log(e.message));;
  }

  ngOnInit() {
  }

}
