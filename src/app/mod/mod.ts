import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'mod',  
    templateUrl: './mod.html',
    styleUrls: ['./mod.css']
})

export class Mod {

constructor(
        private route: ActivatedRoute,
        private router: Router,
        private localStorageService: LocalStorageService
        
){}


logOut()
{
    this.localStorageService.set("token", null);
    this.router.navigate(['/login']);
}

  
}