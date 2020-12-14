import { Component, OnInit } from '@angular/core';
import { FichaService } from '../ficha.service';

@Component({
  selector: 'app-ficha-list',
  templateUrl: './ficha-list.component.html',
  styleUrls: ['./ficha-list.component.scss']
})
export class FichaListComponent implements OnInit {

  fichas : any = []

  constructor(private fichaSrv : FichaService) { }

  async ngOnInit() {
      this.fichas = await this.fichaSrv.listar()
      console.log(this.fichas)
  }

}
