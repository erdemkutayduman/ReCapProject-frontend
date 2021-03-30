import { UserDetail } from './../models/entities/user-detail';
import { Injectable } from '@angular/core';
import { ItemResponseModel } from '../models/responses/item-response-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/responses/response-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44322/api/users";

  constructor(private httpClient:HttpClient) { }

  getUserByEmail(email:string):Observable<ItemResponseModel<UserDetail>> {
    return this.httpClient.get<ItemResponseModel<UserDetail>>(this.apiUrl + "/getbyemail?email=" + email);
  }

  updateUserDetail(user:UserDetail):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/updatedetails", user)
  }

}