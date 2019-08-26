import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pets : any = [];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    let observable = this._http.getPets();
    observable.subscribe(data => {
      this.pets = data;
    });
  }

}
