import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-counties-per-state',
  templateUrl: './counties-per-state.component.html',
  styleUrls: ['./counties-per-state.component.scss']
})
export class CountiesPerStateComponent implements OnInit, OnChanges {

  @Input() counties: any;

  public countiesChartData: any;

  public pieOptions = {
    legend: {
      position: 'left',
      labels: {
        fontColor: '#0F0'
      }
    }
  };

  constructor(
    private utils: UtilsService
  ) { }

  ngOnInit(): void {
    if (this.counties && this.counties.length > 0) {
      this.getStateCountyChartData();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.counties && !changes.counties.firstChange) {
      this.counties = changes.counties.currentValue;
      this.getStateCountyChartData();
    }
  }

  getStateCountyChartData(): void {
    const labels: any[] = [];
    const datasets: any[] = [];

    const bgColors: any[] = [];
    const bgColorsHover: any[] = [];

    this.counties.forEach((cty: any) => {
      datasets.push(cty.counties.length);
      labels.push(cty.state);
      bgColors.push(this.utils.genRandomGreenColor());
      bgColorsHover.push(this.utils.genRandomGreenColor());
    });

    this.countiesChartData = {
      labels,
      datasets: [
          {
              data: datasets,
              backgroundColor: bgColors,
              hoverBackgroundColor: bgColorsHover
          }]
      };
  }
}
