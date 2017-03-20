import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'channel',  
    templateUrl: './channel.html',
    styleUrls: ['./channel.css']
})

export class Channel {

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
          channelId: "SHBL.NAVFILE.FUNDSQUARE.FUNDPRICE",
          msgType: "FUNDPRICE",
          baseType: "NAVFILE",
          subGroup: "FUNDSQUARE",
          client: "SHBL"
        },
        {
           channelId: "SHBL.NAVAREFDATA.FUNDSQUARE.REFDATADBBB",
           msgType: "REFDATADBBB",
           baseType: "NAVAREFDATA",
           subGroup: "FUNDSQUARE",
           client: "SHBL"
         }
      ];

settings = {
        columns: {
          channelId: {
            title: 'Channel ID',
            editable: false
          },
          msgType: {
            title: 'Msg Type',
            editable: false
          },
         baseType: {
            title: 'Base Type',
            editable: false
         },
         subGroup: {
            title: 'Sub Group',
            editable: false
          },
         client: {
            title: 'Client',
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
