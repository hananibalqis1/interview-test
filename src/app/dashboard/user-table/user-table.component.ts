import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
export class UserTableComponent implements OnInit, OnChanges{
  tableData: Table[] = [];

  @Input() getTableData: any;

  constructor(){ }

  ngOnInit(): void {}

  ngOnChanges(){
    this.tableData = this.getTableData;
  }
}
