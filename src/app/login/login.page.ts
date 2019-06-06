import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public users: any = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  }
  public email: string = "";
  public password: string = "";

  constructor(
    private navCtrl: NavController,
    private http: HttpClient
  ) 
    
  { }

  navToTabs() {
    // console.log(this.email, this.password);
    // //  user = {
    // //   email: this.email,
    // //   password: this.password
    // // };

    // this.http.post("http://localhost:3000/users/authentication", user)
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
    this.navCtrl.navigateForward("tabs/tabs/tab1");
    
  }
navToRegister() {
  this.navCtrl.navigateForward("register");
  
}

  ngOnInit() {
  }

}
