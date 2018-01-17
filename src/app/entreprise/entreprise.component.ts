import {Component, OnInit} from '@angular/core';
import 'rxjs';
import {EntrepriseService} from '../services/entreprise.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
  pageEntreprise: any;
  keyWord: string = '';
  id : number =0 ;
  shown : boolean = false ;
  constructor(private entrepriseService: EntrepriseService) {
  }

  ngOnInit() {
    this.onSearch();
  }

  onSearch() {
    this.entrepriseService.getEntrepriseNyName(this.keyWord, 0, 12)
      .subscribe(next => {
        this.pageEntreprise = next;
        console.log(this.pageEntreprise);
      });
  }

  onselect(id: number) {
     this.id = 0 ;
     setTimeout(() => {
       this.id = id ;
     },200)

  }


}
