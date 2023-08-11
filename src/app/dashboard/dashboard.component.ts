import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  charts = ['pieChart', 'barChart'];

  chart1: any;
  chart2: any;

  constructor(){}

  ngOnInit(): void {
  }

  pieChart(pie: any){
    this.chart1 = pie;
    console.log("received pie chart");
  }

  barChart(bar: any){
    this.chart2 = bar;
    console.log("received bar chart");
  }

}
