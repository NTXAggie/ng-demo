import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-cities-by-pop',
  templateUrl: './cities-by-pop.component.html',
  styleUrls: ['./cities-by-pop.component.scss']
})
export class CitiesByPopComponent implements OnInit, OnChanges {

  @Input() cities: any;

  public citiesByPop: any;

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
    if (this.cities && this.cities.length > 0) {
      this.getCitiesByPop(this.cities);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cities && !changes.cities.firstChange) {
      this.cities = changes.cities.currentValue;
      this.getCitiesByPop(this.cities);
    }
  }

  getCitiesByPop(cities: any): void {
    const labels = ['Pop > 500k', 'Pop < 500k & > 100k', 'Pop < 100k'];
    const datasets = [0, 0, 0];

    const bgColors: any[] = [];
    const bgColorsHover: any[] = [];

    cities.forEach((city: any) => {
      if (city && city.population) {
        if (city.population > 500000) {
          datasets[0] += 1;
        } else if (city.population > 100000) {
          datasets[1] += 1;
        } else {
          datasets[2] += 1;
        }
      }
    });

    labels.forEach(e => {
      bgColors.push(this.utils.genRandomGreenColor());
      bgColorsHover.push(this.utils.genRandomGreenColor());
    });

    this.citiesByPop = {
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
