import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(
            private router: Router,
            private localStorageService: LocalStorageService
            ) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.localStorageService.get('token')) 
        {  
            // logged in so return true
            var now = new Date().getTime();
            let limit: any = this.localStorageService.get('lastAction');
            limit = parseInt(limit) + 10000000;
            if( now < limit)
              {
                this.localStorageService.set('lastAction', now);
                return true;
               }
            else
               {
                   this.localStorageService.set("lastAction", null);
                   this.localStorageService.set("token", null);
                   this.router.navigate(['/login'], "Time out");
                   return false;
               }
        }
        else
            {
             // not logged in so redirect to login page with the return url and return false
                this.router.navigate(['/login'], "Not logged");
                return false;
            }        
    }
}