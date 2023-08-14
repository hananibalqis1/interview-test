import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { baseUrl } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userValue = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  login(data: any){
    this.http.post(`${baseUrl}account/login`, data)
    .subscribe((res: any) => {
      localStorage.setItem('token', res);
      this.router.navigate(['/dashboard']);
      this.toastrService.success(
        'Login successful.',
        'Welcome!'
      )
    }, (err) => {
      this.toastrService.error(
        'Login failed!', err
      )
    });

  }

  setToken(token: string): void{
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  get user(){
    return this.userValue;
  }

  logout(){
    localStorage.removeItem('token');
    this.toastrService.info(
      'See you again.',
      'Successfully logged out!'
    );
    this.router.navigate(['/login']);
  }
}
