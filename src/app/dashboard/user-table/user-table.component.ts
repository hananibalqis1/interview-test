import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/Data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit{
  allData: Data[] = [];

  constructor(private tableService: DataService ){
    this.allData = this.tableService.getData();
  }

  ngOnInit(): void {

  }

}
