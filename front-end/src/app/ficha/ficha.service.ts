import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FichaService {

  private server = environment.apiServer
  private apiUrl = this.server + 'ficha'

  constructor(private http : HttpClient) { }

  listar() {
      return this.http.get(this.apiUrl).toPromise()
  }

  excluir(id: string) {
      return this.http.request('DELETE', this.apiUrl, {body: {_id:id}}).toPromise()

  }
}
