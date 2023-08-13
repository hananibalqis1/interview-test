import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) { }

  login(data: any): Observable<any>{
    this.router.navigate(['/dashboard']);
    return this.http.post(`${baseUrl}account/login`, data);
  }

  setToken(token: string): void{
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  dashboard(){
    let headers = new HttpHeaders().set("Authorization", `Bearer ${this.getToken()}`);

    this.http.get(`${baseUrl}dashboard`, {headers})
      .subscribe((res: any) => {
    });
  }

  logout(){
    localStorage.removeItem('token');
  }
}
