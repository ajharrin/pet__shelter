import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) { }

  createPet(pet){
    return this._httpClient.post("/pets", pet);
  }

  getPets(){
    return this._httpClient.get("/pets");
  }

  getOnePet(_id){
    return this._httpClient.get(`/pets/${_id}`);
  }

  updatePet(_id, pet){
    return this._httpClient.put(`/pets/${_id}`, pet);
  }

  removePet(_id){
    return this._httpClient.delete(`pets/${_id}`);
  }

  makeLikeable(_id, pet) {
    return this.updatePet(_id, pet);
  }

}
