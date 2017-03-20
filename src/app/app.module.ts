import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { LocalStorageModule } from 'angular-2-local-storage';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { Clusters } from './clusters/clusters';
import { Channel } from './channel/channel';
import { Transport } from './transport/transport';
import { Mod } from './mod/mod';
import { NotFound } from './notFound/notFound';
import { Configuration } from './configuration/configuration';
import { AppComponent } from './app.component';
import { AuthGuard } from './authGard';
import { ClusterService } from './service/ClusterService';
import { LoginService } from './service/LoginService';
import { ConfigurationService } from './service/ConfigurationService';
import { ChannelService } from './service/ChannelService';
import { TransportService } from './service/TransportService';
import { AuditService } from './service/AuditService';
import { Audits } from './audit/audit';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, Login, Welcome, Clusters, Configuration, Audits, Channel, Transport, Mod, NotFound
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    RouterModule.forRoot(AppRoutes),
    MaterialModule.forRoot(),
    LocalStorageModule.withConfig({
        prefix: 'my-app',
        storageType: 'localStorage'
    })
  ],
  bootstrap: [AppComponent],
  providers: [
              AuthGuard,
              ClusterService,
              LoginService,
              AuditService,
              TransportService,
              ChannelService,
              ConfigurationService,
              LocalStorageModule
              ]
})
export class AppModule { }
