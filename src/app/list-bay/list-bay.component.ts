import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LoginServiceService } from '../Service/login-service.service';
import { AddBayService } from '../Service/add-bay.service';
import { Router } from '@angular/router';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-bay',
  templateUrl: './list-bay.component.html',
  styleUrls: ['./list-bay.component.css']
})
export class ListBayComponent implements OnInit {

  cols: any;
  bayList: any = [];
  show: Boolean = false;
  firstName;
  surName;
  bayId;
  selectId: any;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private loginService: LoginServiceService,
    private baySerivce: AddBayService
  ) { }

  ngOnInit() {
    this.checkSession();
    this.fillCols();
    this.getAll();


  }

  fillCols() {
    this.cols = [
      { field: "name", header: "FIRST NAME" },
      { field: "bayId", header: "BAY ID" },
      { field: "surName", header: "SUR NAME" }
      // { field: "result", header: "RESULT" },

    ];
  }


  getAll() {
    this.bayList = [];
    this.baySerivce.getAllBay().subscribe(res => {
      this.bayList = [];
      if (res != "" || res != []) {
        res.map(d => {
          this.bayList.push({
            "id": d.id,
            "name": d.name,
            "bayId": d.bayId,
            "surName": d.surname
          });
        });
      }
    })
  }

  back() {
    history.go(-1);
  }

  clear() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  checkSession() {
    if (sessionStorage.length > 0) {
      //don nothing;
    }
    else {
      this.router.navigate([''])
    }
  }

  deleteBay(id: any) {
    console.log(id);
    this.baySerivce.delete(id).subscribe(res => {
      console.log(res);
      this.loginService.Toast('success', 'Deleted Sucessfully', 'Bay deleted');
      this.getAll();
    })
  }

  editBay(value: any) {
    console.log(value)
    if (value != null) {
      this.selectId = value.id;
      this.firstName = value.name;
      this.surName = value.surName;
      this.bayId = value.bayId;
      this.show = true;
    }
    else {
      this.show = true;
      this.loginService.Toast('error', 'Something went wrong', 'Try Again');

    }
  }


  updateBay() {
    if (this.firstName != "" && this.bayId != "" && this.surName != "") {
      let obj = {
        "name": this.firstName,
        "bayId": this.bayId,
        "surname": this.surName
      }

      this.baySerivce.update(this.selectId, obj).subscribe(res => {
        console.log(res);
        if (res != null || res != undefined || res != "") {
          this.loginService.Toast('success', 'Updated Sucessfully', 'Good to go');
          this.show = false;
          this.getAll();
        }
      }), error => {
        this.loginService.Toast('error', 'Something went wrong', 'Try Again');
      }

    }
    else {
      this.loginService.Toast('error', 'Fill all the fields please', 'FAILED');
    }

  }
}
