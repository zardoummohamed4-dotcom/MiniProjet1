import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';

import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.sevice';
@Component({
  imports: [CommonModule,RouterLink],
  selector: 'app-vetements',
  standalone: true,
  templateUrl: './vetements.html',
  styleUrl: './vetements.css'
})
export class VetementsComponent implements OnInit  {
  vetements! : Vetement[]; //un tableau de Vetement



  constructor(private vetementService: VetementService,public authService: AuthService) {
   //this.vetements=[]
     
    
   }
  
   ngOnInit() {
    this.vetements = this.vetementService.listeVetements();
     }
   supprimerVetement(p: Vetement) 
  {
  //console.log(p);
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.vetementService.supprimerVetement(p);
  }

}

