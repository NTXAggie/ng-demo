import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { StateInfoComponent } from './pages/state-info/state-info.component';
import { CitiesByStateResolver } from './resolvers/cities-by-state.resolver';
import { CountiesResolver } from './resolvers/counties.resolver';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
   },
   {
     path: 'login',
     component: LoginComponent,
    },
    {
      path: 'state-info',
      component: StateInfoComponent,
      canActivate: [AuthGuard],
      resolve: {
        cities: CitiesByStateResolver,
        counties: CountiesResolver
      }
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
