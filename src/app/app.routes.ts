import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { Clusters } from './clusters/clusters';
import { Audits } from './audit/audit';
import { Channel } from './channel/channel';
import { Transport } from './transport/transport';
import { Mod } from './mod/mod';
import { NotFound } from './notFound/notFound';
import { Configuration } from './configuration/configuration';
import { AppComponent } from './app.component';
import { AuthGuard } from './authGard';

export const AppRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: Login },
  {path: 'login/:msg', component: Login },
  { path: 'mod', canActivate: [AuthGuard], component: Mod,
      children: [
         {path: 'welcome', canActivate: [AuthGuard], component: Welcome },
         {path: 'clusters', canActivate: [AuthGuard], component: Clusters },
         {path: 'channel', canActivate: [AuthGuard], component: Channel },
         {path: 'transport', canActivate: [AuthGuard], component: Transport },
         {path: 'configuration', canActivate: [AuthGuard], component: Configuration },
         {path: 'audit', canActivate: [AuthGuard], component: Audits },
         {path: '**', component: NotFound }
      ]
    },
  {path: '**', component: NotFound }
];