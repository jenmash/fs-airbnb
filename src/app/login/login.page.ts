import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: any = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  }

  constructor( private navCtrl: NavController, private http: HttpClient) {
  }

  public navToTabs() {
    console.log('LOGIN: email: '+this.user.email+', password: '+this.user.password);
    this.navCtrl.navigateForward("tabs/tabs/tab1");

    // FIXME I guess this code doesn't work?
    // this.http.post("http://localhost:3000/users/authentication", this.user)
    //   .subscribe(
    //     response => {
    //       console.log(response);
    //       this.navCtrl.navigateForward("tabs/tabs/tab1") ;
    //     },
    //     err => {
    //       console.log(err);
    //       alert(err.error.message);
    //     }
    //   );
  }

  navToRegister() {
    this.navCtrl.navigateForward("register");
  }

  ngOnInit() { }
}
