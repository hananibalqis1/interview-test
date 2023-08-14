import { Component, Input, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { DataService } from 'src/app/services/data.service';

export interface Charts{
  name: string;
  value: number;
}

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  pieData: Charts[] = [];
  barData: Charts[] = [];
  chartValue: any;

  public pieChart: any;
  public barChart: any;

  constructor(
    private dataService: DataService
  ){}

  ngOnInit(): void {
    //Pie Chart
    this.dataService.getDashboardData().subscribe((res) => {
      this.chartValue = res;

      this.chartValue.chartDonut.forEach((d: Charts) => {
        let data = {name: d.name, value: d.value};
        this.pieData.push(data);
      })

      this.pieChart = this.pieData;
      this.tableFirst(this.pieChart);
    });

    //Bar Chart
    this.dataService.getDashboardData().subscribe((res) => {
      this.chartValue = res;

      this.chartValue.chartBar.forEach((d: Charts) => {
        let data = {name: d.name, value: d.value};
        this.barData.push(data);
      })

      this.barChart = this.barData;
      this.tableSecond(this.barChart);
    });
  }

  tableFirst(pieChart: any){
    let chart = am4core.create("pieChartdiv", am4charts.PieChart);
    chart.data = pieChart;

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    chart.innerRadius = am4core.percent(40);

    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "name";

    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.tooltipText = "";
  }

  tableSecond(barChart: any){
    let chart = am4core.create("barChartdiv", am4charts.XYChart);
    chart.data = barChart;

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.line.strokeOpacity = 1;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.line.strokeOpacity = 1;
    let series = chart.series.push(new am4charts.ColumnSeries());

    series.xAxis.renderer.labels.template.disabled = true;
    series.yAxis.renderer.labels.template.disabled = true;
    series.xAxis.renderer.grid.template.disabled = true;
    series.yAxis.renderer.grid.template.disabled = true;

    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "name";

    series.columns.template.tooltipText = "";
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

  }

}
