import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseURL:string = "/api/admin/";
  constructor(private http:HttpClient) { 
  }
  public getUsers():Observable<user[]>{
    return this.http.get<user[]>(this.baseURL+"getusers"); 
  }
  public addUsers(user:user):Observable<user[]>{
    return this.http.post<any>(this.baseURL+"registeruser",user);
  }
  public removeUser(username:string):Observable<user[]>{
    return this.http.get<any>(this.baseURL+"deleteuser/"+username);
  }
}
