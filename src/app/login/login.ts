import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import { LoginService } from '../service/LoginService';

@Component({
    selector: 'login',  
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
    providers: [LoginService]
})

export class Login implements OnInit {
    pseudo: string;
    pass: string;
    token: string;
    msg: string = null;
    private sub: any;
    loading: boolean;
  
  constructor(
          private route: ActivatedRoute,
          private router: Router,
          private loginService: LoginService,
          private localStorageService: LocalStorageService,
          public snackBar: MdSnackBar
          
){}
  
  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
         this.msg = params['msg'];
         
         if (this.msg != null)
             {
                 let snackBarRef = this.snackBar.open(this.msg, "", {duration: 2000,});
             }
      });
      
      this.loading = false;
    }
  
  onClickLogIn() 
  {
      this.loading = true;
      if(this.pseudo)
          {
              if(this.pass)
                  {
                      if(this.token)
                      {
                          //this.loginService.logIn(this.pseudo, this.pass, this.token).subscribe(response => this.onLoginReceived(response), error => this.checkError(error.status));
                          this.onLoginReceived();
                      }
                      else
                      {
                          let snackBarRef = this.snackBar.open("Type your token !", "", {duration: 2000,});
                          this.loading = false;
                      }
                      
                  }
              else
                  {
                      let snackBarRef = this.snackBar.open("Type your password !", "", {duration: 2000,});
                      this.loading = false;
                  }
              
          }
      else
          {
              let snackBarRef = this.snackBar.open("Type your pseudo !", "", {duration: 2000,});
              this.loading = false;
          }
    }
  
  checkError(status)
  {
      if(status == 404)
          {
              let snackBarRef = this.snackBar.open("Unknown user !", "", {duration: 2000,});
          }
      this.loading = false;
  }
  
  
  onLoginReceived()
  {
      this.loading = false;
      this.localStorageService.set('token', "tokenTest");
      var now = new Date().getTime();
      this.localStorageService.set('lastAction', now);
      this.router.navigate(['/mod/welcome']);
  }
  

}
