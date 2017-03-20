import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit } from '@angular/core';
import { Cluster } from '../model/Cluster';
import { ClusterService } from '../service/ClusterService';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'clusters',  
    templateUrl: './clusters.html',
    styleUrls: ['./clusters.css'],
    providers: [ClusterService]
})
export class Clusters implements OnInit
{
    msgError:string;
    source: LocalDataSource;

logOut()
{
    this.localStorageService.set("token", null);
    this.router.navigate(['/login']);
}

data = [
        {
          clusterAddress: "127.0.0.1",
          clusterName: "local cluster",
          clusterState: true
        },
        {
            clusterAddress: "94.5.36.7",
            clusterName: "x-Intel-07",
            clusterState: false
          },
          {
              clusterAddress: "58.1.1.7",
              clusterName: "rescue",
              clusterState: true
            }          
      ];

    settings = {
        columns: {
            clusterAddress: {
            title: 'Address',
            editable: false,
            filter: false
          },
          clusterName: {
            title: 'Name',
            editable: false,
            filter: false
          },
            clusterState: {
            title: 'State',
            editable: false,
            filter: false,
            type: 'html',
            valuePrepareFunction: (s) => { 
                if(s)
                    {
                        return '<img id="stateImg" width="20px" src="assets/up.png">';
                    }
                else
                    {
                        return '<img id="stateImg" width="20px" src="assets/down.png">';
                    }                
              }
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
    
    constructor
        (
            private route: ActivatedRoute,
            private router: Router,
            private clusterService: ClusterService,
            private localStorageService: LocalStorageService
        ){this.source = new LocalDataSource();}

    ngOnInit(): void 
    {
        this.getClusters();
    }

    getClusters(): void 
    {  
        //this.clusterService.getClusters().subscribe(clusters => this.loadSource(clusters),
                //error => this.checkError(error.status));
        this.loadSource(this.data)
    }
    
    loadSource(data): void
    {
        this.source.load(data);
    }

    checkError(status)
    {
        if(status == 401)
            {
                this.msgError = "Time out";
                this.router.navigate(['/login', this.msgError]);
            }
    }
  
}
