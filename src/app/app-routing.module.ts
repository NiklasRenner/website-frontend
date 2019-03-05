import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '@app/components/main/main.component';
import {AuthGuard} from '@app/middleware/guards/auth.guard';
import {LoginComponent} from '@app/components/login/login.component';
import {NgModule} from '@angular/core';
import {LockedComponent} from '@app/components/locked/locked.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'locked',
    component: LockedComponent,
    canActivate: [AuthGuard]
  },

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
