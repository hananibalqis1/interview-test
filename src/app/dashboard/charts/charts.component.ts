import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  @Output() pieChart = new EventEmitter<any>();
  @Output() barChart = new EventEmitter<any>();

  constructor(){}
  ngOnInit(): void {
    // this.tableFirst();
  }

  tableFirst(){
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    chart.data = [{
      "country": "Lithuania",
      "litres": 10
    }, {
      "country": "Czech Republic",
      "litres": 20
    }, {
      "country": "Ireland",
      "litres": 50
    }, {
      "country": "Germany",
      "litres": 20
    }];

    chart.innerRadius = am4core.percent(40);

    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    this.pieChart.emit(chart);
  }

  tableSecond(){
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.data = [{
      "country": "Lithuania",
      "litres": 50
    }, {
      "country": "Czechia",
      "litres": 100
    }, {
      "country": "Ireland",
      "litres": 90
    }, {
      "country": "Germany",
      "litres": 40
    }, {
      "country": "Australia",
      "litres": 70
    }, {
      "country": "Austria",
      "litres": 10
    }, {
      "country": "UK",
      "litres": 95
    }];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    this.barChart.emit(chart);
  }

}
