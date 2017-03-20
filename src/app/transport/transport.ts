import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'transport',  
    templateUrl: './transport.html',
    styleUrls: ['./transport.css']
})

export class Transport {

constructor(
        private route: ActivatedRoute,
        private router: Router,
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
          transport: "SHBL-NAVA-FUNDSQUARE-IN",
          channelId : "SHBL.NAVFILE.FUNDSQUARE.FUNDPRICE",
          transportType: "SFTP",
          ressources: "testFile/",
          state: "RUNNING"
        },
        {
           transport: "SHBL-NAVA-FUNDSQUARE-OUT",
           channelId : "SHBL.NAVAREFDATA.FUNDSQUARE.REFDATADB",
           transportType: "SFTP",
           ressources: "",
           state: "UNKNOWN CHANNEL ID"
         }
      ];

settings = {
        columns: {
          transport: {
            title: 'Transport',
            editable: false
          },
          channelId: {
              title: 'Channel ID',
              editable: false
            },
          transportType: {
            title: 'Type',
            editable: false
          },
          ressources: {
              title: 'Ressources',
              editable: false
            },
          state: {
              title: 'State',
              editable: false
            }
        },
        actions:
            {
                add: false,
                edit: false,
                delete: false
            },
        pager:
            {
                display: true,
                perPage: 10
            }
      };
  
}
