import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha-form',
  templateUrl: './ficha-form.component.html',
  styleUrls: ['./ficha-form.component.scss']
})
export class FichaFormComponent implements OnInit {
  
    title : string = 'Nova Ordem de Serviço'

  curso : any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
