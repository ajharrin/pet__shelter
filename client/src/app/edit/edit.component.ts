import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pet : any = {};
  errors : any = {};

  constructor(
    private _http : HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let observable = this._http.getOnePet(params._id);
      observable.subscribe(data => {
        this.pet = data;
      });
    });
  }

  updatePet(){
    let observable = this._http.updatePet(this.pet._id, this.pet);
    observable.subscribe(data => {
      if(data['errors']){
        this.errors = data['errors'];
      } else {
        this._router.navigate(['/']);
      }
    });
  }
}
