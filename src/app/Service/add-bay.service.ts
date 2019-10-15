import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AddBayService {

  constructor(private http: HttpClient, private messageService: MessageService, ) {
  }

  postBay(value:Object): Observable<any>{
    return this.http.post(environment.baseUrl + "bay/create", value);
  }
  getAllBay(): Observable<any>{
    return this.http.get(environment.baseUrl + "bay/getall");
  }
  delete(id:any): Observable<any>{
    return this.http.delete(environment.baseUrl + "bay/delete/"+id);
  }
  update(id:any,obj:Object): Observable<any>{
    return this.http.put(environment.baseUrl + "bay/update/"+id,obj);
  }
}
