import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { ConfigurationMod } from '../model/Configuration';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class ConfigurationService {

    constructor(
            private http: Http,
            private localStorageService: LocalStorageService
            ) { }
    
    getConfigurations(configGroup)
    {
        let token = <string>this.localStorageService.get('token');
        let headers = new Headers({ 'Content-Type': 'application/json'});
        headers.append('x-auth-token', token);
        let options = new RequestOptions({ headers: headers });   
        return this.http.get('/api/v1/configuration/?config='+ configGroup, options).map((res: Response) => <ConfigurationMod[]>res.json());
     }
    
    createConfiguration(config: ConfigurationMod)
    {
        let token = <string>this.localStorageService.get('token');
        let headers = new Headers({ 'Content-Type': 'application/json'});
        headers.append('x-auth-token', token);
        let options = new RequestOptions({ headers: headers });  
        
        return this.http.post('/api/v1/configuration', config, options)
        .map((res: Response) => {<String>res.json()});
    }
    
    updateConfiguration(config: ConfigurationMod)
    {
        let token = <string>this.localStorageService.get('token');
        let headers = new Headers({ 'Content-Type': 'application/json'});
        headers.append('x-auth-token', token);
        let options = new RequestOptions({ headers: headers });  
        
        return this.http.put('/api/v1/configuration/'+config.configGroup+ "." + config.key, config, options)
        .map((res: Response) => {<String>res.json()});
    }
    
    deleteConfiguration(config: ConfigurationMod)
    {
        let token = <string>this.localStorageService.get('token');
        let headers = new Headers({ 'Content-Type': 'application/json'});
        headers.append('x-auth-token', token);
        let options = new RequestOptions({ headers: headers });  
        
        return this.http.delete('/api/v1/configuration/'+config.configGroup+ "." + config.key, options)
        .map((res: Response) => {<String>res.json()});
    }
}

