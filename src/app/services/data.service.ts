import { Injectable } from '@angular/core';
import { sample_data } from '../constants/data';
import { Data } from '../models/Data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../../environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private userService: UserService
    ) { }

  getData(): Data[] {
    return sample_data;
  }

  getDashboardData(){
    let headers = new HttpHeaders().set("Authorization", `Bearer ${this.userService.getToken()}`);

    return this.http.get(`${baseUrl}dashboard`, {headers});
  }
}
