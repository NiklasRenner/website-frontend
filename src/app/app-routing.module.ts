import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '@app/components/main/main.component';
import {AuthGuard} from '@app/middleware/guards/auth.guard';
import {LoginComponent} from '@app/components/login/login.component';
import {NgModule} from '@angular/core';
import {LockedComponent} from '@app/components/locked/locked.component';
import {PasteComponent} from '@app/components/paste/paste.component';
import {PasteShowComponent} from '@app/components/paste-show/paste-show.component';

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
    path: 'paste',
    component: PasteComponent
  },
  {
    path: 'paste/:id',
    component: PasteShowComponent
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
