import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/Data';
import { DataService } from 'src/app/services/data.service';

export interface Table{
  firstName: string;
  lastName: string;
  username: string;
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit{
  tableValue: any;
  tableData: Table[] = [];

  constructor(
    private dataService: DataService ){
  }

  ngOnInit(): void {
    this.dataService.getDashboardData().subscribe((res) => {
      this.tableValue = res;

      this.tableValue.tableUsers.forEach((d: Table) => {
        let data = {firstName: d.firstName, lastName:d.lastName, username: d.username};
        this.tableData.push(data);
      });
    });
  }
}
