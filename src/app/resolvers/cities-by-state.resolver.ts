import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { MapService } from '../services/map.service';

@Injectable({
  providedIn: 'root'
})
export class CitiesByStateResolver implements Resolve<boolean> {
  constructor(
    private loadingService: LoaderService,
    private mapService: MapService
  ) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.loadingService.startLoading();
    return this.mapService.getCitiesByState('TX');
  }
}
