import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FichaService {

  private server = environment.apiServer

  constructor(private http : HttpClient) { }

  listar() {
      this.http.get(this.server + 'ficha').toPromise()
  }
}
