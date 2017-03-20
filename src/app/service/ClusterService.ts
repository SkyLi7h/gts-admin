import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Cluster } from '../model/Cluster';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class ClusterService {

    constructor(
            private http: Http,
            private localStorageService: LocalStorageService
            ) { }
    
    getClusters(){
        let token = <string>this.localStorageService.get('token');
        let headers = new Headers({ 'Content-Type': 'application/json'});
        headers.append('x-auth-token', token);
        let options = new RequestOptions({ headers: headers });   
        return this.http.get('/api/v1/cluster', options).map((res: Response) => <Cluster[]>res.json());
      }
}

