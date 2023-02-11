import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    //Declarations--------------------------------------------------------------


    private formBuilder : FormBuilder;
    LoginForm :  FormGroup;


     //Declarations--------------------------------------------------------------




  constructor(formbBuilder : FormBuilder, private router:Router,private loadingCtrl: LoadingController,
    private alertController: AlertController

    ) {

      this.formBuilder = formbBuilder

  }

  ngOnInit() {

        this.LoginForm = this.createLoginForm()
  }

  createLoginForm(): FormGroup{

    return this.formBuilder.group({
      login:['',[Validators.required,Validators.email]],
      password : ['', Validators.required]
    })
  }

  login(){

    this.showLoading();
    if(this.LoginForm.value.login=='arsh@gmail.com' && this.LoginForm.value.password=='arsh'){


     setTimeout(() => {
      this.router.navigate(['home'])
     }, 3500);

    }
    else
    setTimeout(() => {
      this.presentAlert() ;
     }, 3500);


  }

  registerPageLoad(){
    this.router.navigate(['register'])
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Signing In ...',
      duration: 3000,
      cssClass: 'custom-loading',
      spinner:'crescent'
    });

    loading.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sign-In Error',

      message: 'Invalid Login or Password',
      buttons: ['OK'],
    });

    await alert.present();

    //Timed alert Dismiss
    /*setTimeout(async () => {
      await alert.dismiss();
    }, 5000);
*/

}

resetPass(){

this.router.navigate(['resetpass'])


}
}