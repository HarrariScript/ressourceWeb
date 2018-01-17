import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import "rxjs"

@Injectable()
export class RessourceService{
    constructor(private http:HttpClient){}

  getRessourceByEntrepriseID(entrepriseID : number){
      return this.http.get("http://localhost:8080/RessourceByEntrepriseID?entrepriseID="+entrepriseID)
  }
}
