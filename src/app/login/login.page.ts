import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user-model.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User = new User();

  constructor(private navCtrl: NavController, private http: HttpClient) {
  }

  public navToTabs() {
    console.log("user in login: " + typeof this.user);
    console.log('LOGIN: email: ' + this.user.email + ', password: ' + this.user.password);
    // this.navCtrl.navigateForward("tabs/tabs/tab1");

    // FIXME I guess this code doesn't work
    this.http.post("http://localhost:3000/users/authentication", this.user)
      .subscribe(
        (response: any) => {

          if (response == Error) {
            console.log("Incorrest password");
          }
          else {
            const userId = response.id;
            localStorage.setItem("user_id", userId);

            this.navCtrl.navigateForward("tabs/tabs/tab1", {

            });
          }
        });
  }


  //         console.log(response);
  //         this.navCtrl.navigateForward("tabs/tabs/tab1") ;
  //       },
  //       err => {
  //         console.log(err);
  //         alert(err.error.message);
  //       }
  //     );
  // }

  navToRegister() {
    this.navCtrl.navigateForward("register");
  }

  ngOnInit() { }
}
