import {HttpClient} from '@angular/common/http';
import "rxjs"
import {Injectable} from '@angular/core';

@Injectable()
export class EntrepriseService {

  constructor(private http : HttpClient){

  }
  getEntrepriseNyName(keyWord : string , page : number , size : number){
    return this.http.get("http://localhost:8080/entrepriseNyName?keyWord="+keyWord+"&page="+page+"&size="+size)
  }

}
