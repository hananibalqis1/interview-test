import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{

  constructor(private userService: UserService){}

  ngOnInit(): void {
  }

  onLogout(){
    this.userService.logout();
  }

}
