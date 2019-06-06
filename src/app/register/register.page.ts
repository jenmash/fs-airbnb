import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user: any = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  }

  constructor(private httpClient: HttpClient, private navCtrl: NavController) { }

  register() {
    console.log("Submitting to the server...");
    console.log(this.user);

    this.httpClient.post("http://localhost:3000/users", this.user).subscribe(
      (response: any) => {
        console.log(response);
        this.navCtrl.navigateForward("tabs/tabs/tab1", { queryParams: { userId: response.id } });
      },
      (err) => {
        console.log(err);
        alert("Email already in use");
      }
    );
  }

  ngOnInit() {
  }



}
