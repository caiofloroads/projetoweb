import { Component, OnInit } from '@angular/core';
import { FichaService } from '../ficha.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ficha-list',
  templateUrl: './ficha-list.component.html',
  styleUrls: ['./ficha-list.component.scss']
})
export class FichaListComponent implements OnInit {

  fichas : any = []

  displayedColumns : string[] = ['funcionario', 'produto', 'qtde_pecas', 'valor_total_ficha', 'editar', 'excluir']

  constructor(private fichaSrv : FichaService, private snackBar: MatSnackBar) { }

  async ngOnInit() {
      this.fichas = await this.fichaSrv.listar()
      console.log(this.fichas)
  }
  
  async excluir(id: string) {
      if(confirm('Deseja realmente excluir este item?')) {
          try {
            await this.fichaSrv.excluir(id)
            this.ngOnInit()
            this.snackBar.open('Item excluido com sucesso.', 'Entendi', {
                duration: 5000
      })

          }
          catch(erro) {
            console.error(erro)
            this.snackBar.open('ERRO: Nao foi possivel realizar a exclusao.', 'Que pena!', {
              duration: 5000
      })

          }
      }
  }

}
