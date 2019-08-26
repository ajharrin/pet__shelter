import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  pet : any = {};
  errors : any = {};


  constructor(private _http : HttpService, private _router: Router) { }

  ngOnInit() {
  }

  addPet(){
    this.pet.likes = 0;
    let observable = this._http.createPet(this.pet);
    observable.subscribe(data => {
      if(data['errors']) {
        this.errors = data['errors'];
      } else {
        this._router.navigate(["/"]);
      }
    })
  }

}
