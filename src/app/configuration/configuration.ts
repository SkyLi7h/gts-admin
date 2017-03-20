import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit } from '@angular/core';
import { Audit } from '../model/Audit';
import { ConfigurationService } from '../service/ConfigurationService';
import { ConfigurationMod } from '../model/Configuration';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'configuration',  
    templateUrl: './configuration.html',
    styleUrls: ['./configuration.css'],
    providers: [ConfigurationService]
})

export class Configuration {

constructor(
        private route: ActivatedRoute,
        private router: Router,
        private configurationService: ConfigurationService,
        private localStorageService: LocalStorageService
        
){this.source = new LocalDataSource(this.data);}

source: LocalDataSource;

logOut()
{
    this.localStorageService.set("token", null);
    this.router.navigate(['/login']);
}

data = [
        {
          configGroup: "config-system",
          key: "ConfigManager.load.frequency",
          value: 30000
        },
        {
           configGroup: "config-environ",
           key: "ChannelEngine.concurrentSizeLimit.available.Lucas-HP-1",
           value: 1572864000
         },
         {
            configGroup: "config-environ",
            key: "EmailManager.smtp.from",
            value: "noreply@theb2group.net"
          },
          {
            configGroup: "config-environ",
            key: "SentinelJNRPEServer.nrpe.acceptedHosts",
            value: "127.0.0.1"
          },
          {
             configGroup: "config-environ",
             key: "SimpleSeqGen.persist",
             value: "true"
           },
           {
              configGroup: "config-system",
              key: "ReportManager.import.frequency",
              value: 30000
           }
      ];

settings = {
      add: {
            confirmCreate: true
          }, 
      delete: {
            confirmDelete: true
            },
      edit: {
             confirmSave: true
            },
      columns: {
          configGroup: {
            title: 'Config group',
            editable: true,
            filter : {
                type: 'list',
                config: {
                    selectText: "Select group ...",
                    list:[
                          {value:'config-channel', title:'config-channel'},
                          {value:'config-system', title:'config-system'},
                          {value:'config-environ', title:'config-environ'},
                          {value:'config-comms', title:'config-comms'}                        
                          ]   
                }  
            }
          },
          key: {
            title: 'Key',
            editable: true
          },
          value: {
              title: 'Value',
              editable: true
            }
        },
        actions:
            {
                add: true,
                edit: true,
                delete: true
            },
        pager:
            {
                display: true,
                perPage: 10
            }
      };


onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
        let config : ConfigurationMod = {configGroup: "test", key : "test", value : "test"};
    //this.configurationService.deleteConfiguration(config).subscribe(response => this.onLoginReceived(response), error => this.checkError(error.status));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

onSaveConfirm(event): void {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['configGroup'] += ' + added in code';
      let config : ConfigurationMod = {configGroup: "test", key : "test", value : "test"};
      //this.configurationService.updateConfiguration(config).subscribe(response => this.onLoginReceived(response), error => this.checkError(error.status));
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

onCreateConfirm(event): void {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData['configGroup'] += ' + added in code';
      let config : ConfigurationMod = {configGroup: "test", key : "test", value : "test"};
      //this.configurationService.createConfiguration(config).subscribe(response => this.onLoginReceived(response), error => this.checkError(error.status));
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  
}