import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private messageService: MessageService,) {

  }
  checkUserandPass(name: string, pwd: string): Observable<any> {
    let user = {
      username: name,
      password: pwd
    }

    return this.http.post(environment.tokenUrl+ "token/generate-token", user);
  }


  Toast(severity:any,summary:any,detail:any) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail
    });
  }



}
