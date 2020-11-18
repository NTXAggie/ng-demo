import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap, last, finalize, debounceTime, debounce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private URL = 'localhost:3000';

  private covidTestingSitesSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public covidTestingSites$: Observable<any> = this.covidTestingSitesSubject.asObservable();

  private citiesSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public cities$: Observable<any> = this.citiesSubject.asObservable();

  private countiesSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public counties$: Observable<any> = this.countiesSubject.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  getCovidTestingSites(): Observable<any> {
    return this.http.get<any[]>(`http://localhost:3000/covid-testing-sites`).pipe(
      map((res: any) => {
        res.forEach((el: any) => {
          el.lat = el.geometry.coordinates[1];
          el.lng = el.geometry.coordinates[0];
        });
        return res;
      }),
      tap((res) => {
        this.covidTestingSitesSubject.next(res);
      }),
      catchError(err => {
        console.log(`failed to fetch testing sites`, err);
        return err;
      })
    );
  }
  getCitiesByState(state: string): Observable<any> {
    return this.http.get<any[]>(`http://localhost:3000/cities-by-state/${state}`).pipe(
      tap((res) => {
        this.citiesSubject.next(res);
      }),
      catchError(err => {
        console.log(`failed to fetch cities`, err);
        return err;
      })
    );
  }
  getCounties(): Observable<any> {
    return this.http.get<any[]>(`http://localhost:3000/counties-by-state`).pipe(
      tap((res) => {
        this.countiesSubject.next(res);
      }),
      catchError(err => {
        console.log(`failed to fetch counties`, err);
        return err;
      })
    );
  }
}
