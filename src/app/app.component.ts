import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  constructor(
          private route: ActivatedRoute,
          private localStorageService: LocalStorageService,
          private router: Router,
        ) {}

  ngOnInit(){
      this.localStorageService.set("token", null);
   }
  
}
