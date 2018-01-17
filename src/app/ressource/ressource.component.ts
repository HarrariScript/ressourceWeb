import {Component, Input, OnInit} from '@angular/core';
import {RessourceService} from '../services/ressource.service';
import {nextTick} from 'q';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {

  @Input() entrepriseID : number;
   pageRessource : any ;
  constructor(private ressourceService : RessourceService) { }

  ngOnInit() {
    this.onSearch();
  }

  onSearch(){
    this.ressourceService.getRessourceByEntrepriseID(this.entrepriseID)
      .subscribe(next => {
        this.pageRessource = next
        console.log(this.pageRessource)
      })
  }

}
