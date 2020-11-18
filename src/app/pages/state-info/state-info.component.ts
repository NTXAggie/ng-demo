import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { States } from 'src/app/const/states';
import { LoaderService } from 'src/app/services/loader.service';
import { MapService } from 'src/app/services/map.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-state-info',
  templateUrl: './state-info.component.html',
  styleUrls: ['./state-info.component.scss']
})
export class StateInfoComponent implements OnInit {

  public selectedState = 'TX';

  public selectedStateObj = { label: 'Texas', value: 'TX' };

  public states = States;

  public data: any;

  constructor(
    private mapService: MapService,
    private loaderService: LoaderService,
    private activatedRoute: ActivatedRoute,
    private utils: UtilsService
  ) { }

  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data;

    if (this.data && this.data.counties && this.data.counties.length > 0) {
      this.data.countiesList = [];
      this.data.counties.forEach((cty: any) => {
        this.data.countiesList.push(...cty.counties);
      });
    }

    // subscribe to fetched new cities
    this.mapService.cities$.subscribe(cities => {
      this.data.cities = cities;
      this.data.citiesList = [];
      this.data.cities.forEach((city: any) => {
        if (city && city.city) {
          this.data.citiesList.push(city.city);
        }
      });
      this.loaderService.endLoading();
    });
    this.loaderService.endLoading();
  }

  getCities(): void {
    const sub = this.mapService.getCitiesByState(this.selectedState).subscribe(res => {
      sub.unsubscribe();
    });
  }

  stateChange(e: any): void {
    const newState = this.states.find(stateObj => stateObj.value === this.selectedState);
    this.selectedStateObj = newState ? newState : this.selectedStateObj;
    this.loaderService.startLoading();
    this.getCities();
  }
}
