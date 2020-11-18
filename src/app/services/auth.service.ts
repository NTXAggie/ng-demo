import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginState = false;
  constructor() { }

  public login(pw: string): Observable<any> {
    return of(pw === 'ridgelineintl').pipe(
      tap((res) => this.loginState = res)
    );
  }

  public isLoggedIn(): any {
    return this.loginState;
  }
}
