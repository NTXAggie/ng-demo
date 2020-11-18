import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IAlphabet } from 'src/app/interfaces/alphabet';
import { Alphabet } from 'src/app/interfaces/alphabet.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-cities-by-letter',
  templateUrl: './cities-by-letter.component.html',
  styleUrls: ['./cities-by-letter.component.scss']
})
export class CitiesByLetterComponent implements OnInit, OnChanges {

  @Input() cities: any;

  public citiesChartData: any;

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
      this.getStateCountyChartData();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cities && !changes.cities.firstChange) {
      this.cities = changes.cities.currentValue;
      this.getStateCountyChartData();
    }
  }
  countStartingLetters(arr: any, prevCount?: IAlphabet): IAlphabet {
    const count = prevCount || new Alphabet();
    arr.forEach((e: any) => {
      const letter: keyof Alphabet = e.city.substr(0, 1).toUpperCase();
      count[letter]++;
    });
    return count;
  }
  getStateCountyChartData(): void {
    let labels: any[] = [];
    let datasets: any[] = [];

    const bgColors: any[] = [];
    const bgColorsHover: any[] = [];
    const masterCount = new Alphabet();

    // count starting letter
    this.countStartingLetters(this.cities, masterCount);

    // setup labels and datasets
    labels = Object.keys(masterCount);
    datasets = Object.values(masterCount);

    // generate colors for each letter
    for (const item in masterCount) {
      if (item) {
        bgColors.push(this.utils.genRandomGreenColor());
        bgColorsHover.push(this.utils.genRandomGreenColor());
      }
    }

    this.citiesChartData = {
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
