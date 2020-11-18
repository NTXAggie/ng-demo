import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IAlphabet } from 'src/app/interfaces/alphabet';
import { Alphabet } from 'src/app/interfaces/alphabet.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-chart-starting-letter',
  templateUrl: './chart-starting-letter.component.html',
  styleUrls: ['./chart-starting-letter.component.scss']
})
export class ChartStartingLetterComponent implements OnInit, OnChanges {

  @Input() itemsList: any;

  @Input() title = '';

  public chartData: any;

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
    if (this.itemsList && this.itemsList.length > 0) {
      this.getStateCountyChartData();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.itemsList && !changes.itemsList.firstChange) {
      this.itemsList = changes.itemsList.currentValue;
      this.getStateCountyChartData();
    }
  }
  countStartingLetters(arr: any, prevCount?: IAlphabet): IAlphabet {
    const count = prevCount || new Alphabet();
    arr.forEach((e: any) => {
      const letter: keyof Alphabet = e.substr(0, 1).toUpperCase();
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
    this.countStartingLetters(this.itemsList, masterCount);

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

    this.chartData = {
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
