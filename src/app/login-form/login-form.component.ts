import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginServiceService } from '../Service/login-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  deleteAllHistory;
  token;
  userName;
  userType;
  getType
  labUrl;
  opdUrl;
  pharmacyUrl;
  showErrorMessage: Boolean = false;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private loginService:LoginServiceService
  ) { }
  ngOnInit() {
    // this.nav.hide();
  
  
    window.onbeforeunload = function () { return "Your work will be lost."; };
  }

  console(v1, v2) {
    console.log(v1,v2)
  }

  check(uname: string, p: string) {
    // var output = this.service.checkUserandPass(uname, p);
    this.loginService.checkUserandPass(uname, p).subscribe(
      res => {
        // console.log('toker', res);
        var getType = res.result.userType.toUpperCase();

      
         if (getType == "USER") {
          this.credentials(res);
          this.succesMethod();
          this.showErrorMessage = false;
          setTimeout(() => {
            this.router.navigate(['/testComponent']);
          }, 1000);
         
        }

        else if (getType = "SUPERADMIN") {
          this.credentials(res);
          this.succesMethod();
          this.showErrorMessage = false;
           setTimeout(() => {
             this.addBay();
           }, 2000);
        }

        else {
          this.showErrorMessage = true;
          this.errorMethod("Not Authorized");
        }

      },
      error => {
        this.showErrorMessage = true;
        // console.log(error);
        this.errorMethod("Not Authorized")
      }
    );
  }
  addBay(): any {
    this.router.navigate(['/addBay']);
  }
  goToUserPage(): any {
    throw new Error("Method not implemented.");
  }


  credentials(res) {
    sessionStorage.setItem('token', res.result.token);
    this.userName = sessionStorage.setItem('username', res.result.username);
    this.userType = sessionStorage.setItem('userType', res.result.userType);
    this.getType = sessionStorage.getItem('userType').toUpperCase();

  }

  succesMethod() {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Login Succesful'
    });
  }



  errorMethod(msg: String) {
    this.messageService.add({
      severity: 'error',
      summary: msg.toString(),
      detail: 'retry login'
    });
  }







  goToLab() {
    setTimeout(() => {
      this.router.navigate(['showOrProcessReports']);
    }, 1000);
  }



}
