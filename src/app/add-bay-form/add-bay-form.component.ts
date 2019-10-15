import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginServiceService } from '../Service/login-service.service';
import { AddBayService } from '../Service/add-bay.service';

@Component({
  selector: 'app-add-bay-form',
  templateUrl: './add-bay-form.component.html',
  styleUrls: ['./add-bay-form.component.css']
})
export class AddBayFormComponent implements OnInit {


  
  constructor(
    private router: Router,
    private messageService: MessageService,
    private loginService: LoginServiceService,
    private baySerivce:AddBayService
  ) { }

  ngOnInit() {
    this.checkSession();
  }

  submit(firstName:any,bayId:any,surName){
    console.log(firstName,bayId,surName)
    if(firstName!="" && bayId!="" && surName!=""){
      let obj = {
          "name":firstName,
          "bayId":bayId,
          "surname":surName
        }
        this.baySerivce.postBay(obj).subscribe(res=>{
          console.log(res);
          this.loginService.Toast('info', 'Bay Added Successfully', 'good to go');
          setTimeout(() => {
            this.router.navigate(['/baylist'])
          }, 1000);
          
      }),error=>{
        this.loginService.Toast('error', 'Please Fill the all the fields', 'Failed');
        setTimeout(() => {
          this.router.navigate([])
        }, 1000);
      }

      // console.log(obj)

    }
    else{
      this.loginService.Toast('error', 'Please Fill the all the fields', 'Failed')
    }
    
  }

  goToListOfBay(){
    this.router.navigate(['/baylist'])
  }

  checkSession(){
    if(sessionStorage.length>0){
        //don nothing;
    }
    else{
      this.router.navigate([''])
    }
  }


  gotoSignUp(){
    this.router.navigate(['/signUp']);
  }



}
