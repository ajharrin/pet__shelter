import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  pet : any = {};
  errors : any = {};

  constructor(
    private _http: HttpService,
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

  adoptPet() {
    let observable = this._http.removePet(this.pet._id);
    observable.subscribe(data => {
      this.pet = data;
      this._router.navigate(['/']);
    });
  }

  like(){
    this.pet.isLikeable = !this.pet.isLikeable;
    this.pet.likes += 1;
    let observable = this._http.makeLikeable(this.pet._id, this.pet);
    observable.subscribe(data => {
      
    });
  }

  likeable(){
    this.pet.isLikeable = !this.pet.isLikeable;
    let observable = this._http.updatePet(this.pet._id, this.pet);
    observable.subscribe(data => {
      this._router.navigate(['/']);
    });
  }

}
