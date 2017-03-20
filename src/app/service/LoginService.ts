import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { User } from '../model/User';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class LoginService {

    constructor(private http: Http,
                private localStorageService: LocalStorageService) { }
    
    logIn(pseudo, pass, token)
    {        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post('/api/v1/auth/loginOTP', { username : pseudo, password : pass, otp : token }, options)
        .map((res: Response) => {<String>res.json(); this.saveToken(res.headers)});
      }
    
    saveToken(header)
    {
        this.localStorageService.set('token', <string>header.get('x-auth-token'));
    }
}

