import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

export interface Charts{
  name: string;
  value: number;
};

export interface Table{
  firstName: string;
  lastName: string;
  username: string;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  chartValue: any;
  tableValue: any;

  pieData: Charts[] = [];
  barData: Charts[] = [];
  tableData: Table[] = [];

  pieChart: any;
  barChart: any;
  tableList: any;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getDashboardData().subscribe((res) => {
      this.chartValue = res;

      this.chartValue.chartDonut.forEach((d: Charts) => {
        let data = {name: d.name, value: d.value};
        this.pieData.push(data);
      })

      this.chartValue.chartBar.forEach((d: Charts) => {
        let data = {name: d.name, value: d.value};
        this.barData.push(data);
      })

      this.chartValue.tableUsers.forEach((d: Table) => {
        let data = {firstName: d.firstName, lastName:d.lastName, username: d.username};
        this.tableData.push(data);
      })

      this.pieChart = this.pieData;
      this.barChart = this.barData;
      this.tableList = this.tableData;
    });
  }

}
