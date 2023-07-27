import { Injectable } from '@angular/core';
import {Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(public afAuth: Auth) { }
  async registerUser(email: string, password: string){
    try {
      const user =await createUserWithEmailAndPassword(this.afAuth, email,password);
      return user
    } catch (e) {
      console.log(e)
      return null;
    }
  }

  async loginUser(email: string, password: string){
    try {
      const user =await signInWithEmailAndPassword(this.afAuth, email,password);
      return user
    } catch (e) {
      console.log(e)
      return null;
    }
  }

  async logout() {
    return signOut(this.afAuth)
  }


}
