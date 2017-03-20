import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit } from '@angular/core';
import { Audit } from '../model/Audit';
import { AuditService } from '../service/AuditService';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'audit',  
    templateUrl: './audit.html',
    styleUrls: ['./audit.css'],
    providers: [AuditService]
})
export class Audits implements OnInit
{
    
    msgError:string;
    test:string = "";
    source: LocalDataSource;

logOut()
{
    this.localStorageService.set("token", null);
    this.router.navigate(['/login']);
}

data = [
        {
            typeAction: "login",
            action: "post",
            actionTime: 1489569727,
            user: "admin"
        },
        {
            typeAction: "cluster",
            action: "get",
            actionTime: 1489569738,
            user: "admin"
        },
        {
            typeAction: "login",
            action: "post",
            actionTime: true,
            user: "admin"
        },
        {
            typeAction: "login",
            action: "post",
            actionTime: 1489569899,
            user: "lucas"
        },
        {
            typeAction: "configuration",
            action: "post",
            actionTime: 148957011,
            user: "lucas"
        },
        {
            typeAction: "configuration",
            action: "put",
            actionTime: 1489569899,
            user: "test"
        },
        {
            typeAction: "configuration",
            action: "del",
            actionTime: 1489569899,
            user: "test"
        },
        {
            typeAction: "channel",
            action: "get",
            actionTime: 1489569899,
            user: "test"
        },
        {
            typeAction: "transport",
            action: "get",
            actionTime: 1489569899,
            user: "test"
        },
        {
            typeAction: "configuration",
            action: "get",
            actionTime: 1489569899,
            user: "test"
        },
        {
            typeAction: "configuration",
            action: "get",
            actionTime: 1489569899,
            user: "test"
        },
        {
            typeAction: "configuration",
            action: "post",
            actionTime: 1489569899,
            user: "test"
        }
      ];

settings = {
        columns: {
          typeAction: {
            title: 'Action type',
            editable: false,
            filter : {
                type: 'list',
                config: {
                    selectText: "Select type ...",
                    list:[
                          {value:'login', title:'login'},
                          {value:'cluster', title:'cluster'},
                          {value:'channel', title:'channel'},
                          {value:'configuration', title:'configuration'},        
                          {value:'transport', title:'transport'}, 
                          ]   
                }  
            }
          },
          action: {
            title: 'Action',
            editable: false,
            filter : {
                type: 'list',
                config: {
                    selectText: "Select action ...",
                    list:[
                          {value:'get', title:'get'},
                          {value:'post', title:'post'},
                          {value:'put', title:'put'},
                          {value:'del', title:'del'}
                          ]   
                }  
            }
          },
          actionTime: {
              title: 'Time',
              editable: false,
              valuePrepareFunction: (d) => { 
                  var date = new Date(d);
                  return date.toLocaleString(); 
                }
            },
           user: {
            title: 'User',
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

    
    constructor
        (
            private route: ActivatedRoute,
            private router: Router,
            private auditService: AuditService,
            private localStorageService: LocalStorageService
        ){this.source = new LocalDataSource();}

    ngOnInit(): void 
    {
        this.getAudits();
    }

    getAudits(): void 
    {  
        //this.auditService.getAudits().subscribe(audits => this.loadSource(audits),
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
