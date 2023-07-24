import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario= this.fb.group({
    
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,
    Validators.minLength(4)]],
    })

  constructor(private fb: FormBuilder,
    private auth: AuthService,public alertCtrl:AlertController, private router: Router) { }

  ngOnInit() {
  }



  email() {
    return this.usuario.get('email')
  }

  password() {
    return this.usuario.get('password')
  }

  login(){
    const email = this.usuario.get('email')?.value;
    const pass = this.usuario.get('password')?.value;


    this.auth.loginUser(this.usuario.value.email!, this.usuario.value.password!).then( _result => {
      this.router.navigate(['/init-tabs']);
    }).catch(err=>{
      this.showAlerts('Error',err.message)
    })
  }


  signin(){
    const email = this.usuario.get('email')?.value;
    const pass = this.usuario.get('password')?.value;


    this.auth.registerUser(this.usuario.value.email!, this.usuario.value.password!).then( _result => {
      this.router.navigate(['/init-tabs']);
    }).catch(err=>{
      this.showAlerts('Error',err.message)
  })}

  async showAlerts(header:string,message:string){
    this.alertCtrl.create({
      header: header,
      subHeader: message,
      buttons: ['Aceptar']
      }).then(alert=>{
      alert.present();
      });
  }

}
